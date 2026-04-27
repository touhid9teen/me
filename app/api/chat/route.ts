import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { projects, experiences, education, blogPost } from "@/lib/variables";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          text: "I'm sorry, I'm not fully configured yet. The developer needs to add the GEMINI_API_KEY to the environment variables.",
        },
        { status: 200 },
      );
    }

    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].text;

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Construct a context-aware system prompt
    const systemPrompt = `
    You are an AI assistant for Touhid, a Software Engineer.
    Your role is to represent Touhid professionally and answer questions about his portfolio.
    
    Here is Touhid's background data:
    
    EXPERIENCE:
    ${JSON.stringify(experiences)}
    
    PROJECTS:
    ${JSON.stringify(projects)}
    
    EDUCATION:
    ${JSON.stringify(education)}
    
    BLOGS/WRITINGS:
    ${JSON.stringify(blogPost)}
    
    CONTACT INFO:
    - Phone/WhatsApp: +8801785250717
    - Email: touhid.ru66@gmail.com
    - Location: Gulshan, Dhaka
    
    INSTRUCTIONS:
    - Answer in the first person plural (e.g., "We" or "Touhid") or third person ("Touhid is...", "He..."). 
    - Or act as his personal assistant ("I can tell you that Touhid...").
    - Be brief, professional, and friendly.
    - If the user asks about a specific project (like "Amart" or "Comment System"), provide details from the JSON.
    - If the user asks for contact, share the WhatsApp or Email.
    - If the user says "Hi" or "Hello", welcome them to the portfolio.
    - Do not make up facts. If info is missing, suggest contacting him directly.
    `;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-lite",
      systemInstruction: systemPrompt,
    });

    // Map history and filter out consecutive roles and ensure it starts with 'user'
    let history = messages.slice(0, -1).map((m: any) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    // Filter history to ensure it's alternating correctly and starts with user
    const cleanHistory = [];
    let lastRole = "";
    
    for (const msg of history) {
      if (msg.role === "user" || msg.role === "model") {
        if (msg.role !== lastRole) {
          if (cleanHistory.length === 0 && msg.role === "model") continue;
          
          cleanHistory.push(msg);
          lastRole = msg.role;
        }
      }
    }

    const chatSession = model.startChat({
      history: cleanHistory.slice(-10),
    });

    const result = await chatSession.sendMessage(userMessage);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json(
      {
        text: "I'm having trouble connecting to my brain right now. Please try again later or contact Touhid directly.",
      },
      { status: 500 },
    );
  }
}
