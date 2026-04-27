const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const apiKey = "AIzaSyB1WQn8XklIEMYglnshGy2EBX5r6Lh1M4E";
  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello");
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("Error Status:", error.status);
    console.error("Error Message:", error.message);
    console.error("Full Error:", error);
  }
}

test();
