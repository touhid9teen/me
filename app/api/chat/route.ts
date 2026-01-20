import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { projects, experiences, education, dummyBlogs } from "@/lib/variables";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          text: "I'm sorry, I'm not fully configured yet. The developer needs to add the GEMINI_API_KEY to the environment variables.",
        },
        { status: 200 }, // Return 200 so the chat shows the error message nicely
      );
    }

    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].text;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
    ${JSON.stringify(dummyBlogs)}
    
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

    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I am ready to assist visitors with information about Touhid's portfolio.",
            },
          ],
        },
        // We could map previous messages here if needed, but for simplicity let's rely on the immediate context + user query
        // or map the last few messages from the client.
        ...messages
          .slice(0, -1)
          .map((m: any) => ({
            role: m.sender === "user" ? "user" : "model",
            parts: [{ text: m.text }],
          }))
          .slice(-10), // Keep last 10 messages for context window stability
      ],
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
