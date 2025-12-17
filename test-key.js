const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');
let apiKey = "";

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log("File content length:", envContent.length);
    console.log("First 50 chars:", JSON.stringify(envContent.substring(0, 50)));

    // Try a more robust regex or just split
    const lines = envContent.split('\n');
    for (const line of lines) {
        if (line.includes('NEXT_PUBLIC_GEMINI_API_KEY')) {
            const parts = line.split('=');
            if (parts.length > 1) {
                apiKey = parts[1].trim();
                console.log("Found key in line:", line);
                break;
            }
        }
    }
} catch (e) {
    console.error("Could not read .env.local:", e.message);
}

if (!apiKey) {
    console.error("API Key not found in parsed content.");
    process.exit(1);
}

// Remove any quotes if present
apiKey = apiKey.replace(/^["']|["']$/g, '');

console.log("Using API Key:", apiKey.replace(/./g, '*').substring(0, 10)); // Hide actual key but show length
const genAI = new GoogleGenerativeAI(apiKey);

async function testModel(modelName) {
    console.log(`Testing model: ${modelName}...`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello?");
        console.log("Success:", result.response.text());
        return true;
    } catch (error) {
        console.error(`Failed:`, error.message);
        return false;
    }
}

testModel("gemini-2.0-flash").then(() => testModel("gemini-1.5-flash"));
