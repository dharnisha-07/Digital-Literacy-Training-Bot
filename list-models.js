const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDfyD6aJoKVLrgIKHLd4I0DFqtcAkmJUwo";
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    console.log("Listing available models...");
    try {
        // Note: The Node.js SDK doesn't have a direct 'listModels' on the main class in all versions,
        // but usually we can try to infer or just test common ones.
        // actually, the SDK might not expose listModels easily without the model manager.
        // Let's testing a few standard names directly.

        const modelsToTest = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-latest",
            "gemini-1.5-pro",
            "gemini-pro",
            "gemini-1.0-pro"
        ];

        for (const modelName of modelsToTest) {
            console.log(`Testing access to: ${modelName}`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Test");
                console.log(`✅ ${modelName} is working!`);
                return; // Found one!
            } catch (e) {
                console.log(`❌ ${modelName} failed: ${e.message.split(']')[1] || e.message}`);
            }
        }
        console.log("No working models found in the standard list.");

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
