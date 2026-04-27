const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  const apiKey = "AIzaSyB1WQn8XklIEMYglnshGy2EBX5r6Lh1M4E";
  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    // There isn't a direct listModels in the main SDK class usually, 
    // it's often done via a fetch call to the discovery API or similar.
    // But let's try a different model name.
    const models = ["gemini-pro", "gemini-1.0-pro", "gemini-1.5-flash-latest", "gemini-1.5-pro"];
    for (const m of models) {
      try {
        const model = genAI.getGenerativeModel({ model: m });
        const result = await model.generateContent("Hi");
        console.log(`Model ${m} works!`);
        return;
      } catch (e) {
        console.log(`Model ${m} failed: ${e.message}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

listModels();
