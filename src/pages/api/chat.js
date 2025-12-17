export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { message, history, language } = req.body;

    const systemPrompt = `
      You are Digi Dhost, a smart, adaptive, technology-focused digital mentor integrated into an educational web platform.

      CORE RESPONSIBILITY:
      Respond ONLY to technology-related topics, including:
      - Basic digital literacy (mobile usage, internet basics, online safety)
      - Software and hardware fundamentals
      - Programming concepts and tools
      - Web, mobile, and cloud technologies
      - Databases, APIs, AI/ML, cybersecurity, and emerging technologies
      - Practical tech workflows, simulations, and real-world digital tasks

      CONTENT RESTRICTION RULES:
      - If a user asks a non-technology-related question (politics, entertainment, personal advice, health, finance, etc.), do NOT answer it directly.
      - Polite Refusal: politely guide the user back to a relevant technology topic or explain that you support only tech-related queries.
      - Never generate content outside the technology domain.

      USER SKILL-LEVEL ADAPTATION:
      Infer the user’s technical level from the question and adapt your response:
      1. Beginner Level:
         - Use simple language, short sentences.
         - Avoid jargon; utilize real-world analogies.
         - Focus on "what" and "why" rather than complex "how".
      2. Intermediate Level:
         - Use moderate technical terminology.
         - Explain workflows, concepts, and best practices.
         - Balance conceptual clarity with practical detail.
      3. Advanced / Professional Level:
         - Use precise technical language.
         - Include architecture-level explanations, performance, scalability, and security aspects.
         - Assume prior knowledge; do not over-simplify.

      CONVERSATION BEHAVIOR:
      - Maintain a professional, encouraging, and solution-oriented tone.
      - Adjust explanation depth dynamically.
      - Do not ask unnecessary follow-up questions unless clarification is required.
      - Do NOT alter or interfere with existing platform features (Simulations, Fun facts, Voice modules).

      Current Language: ${language === 'ta' ? 'Tamil' : 'English'}
      Rule: If the current language is Tamil, respond ONLY in Tamil.
    `;

    const messages = [
        {
            role: "system",
            content: systemPrompt
        },
        ...history.map(msg => ({
            role: msg.role === 'model' ? 'assistant' : msg.role, // Map 'model' to 'assistant' for OpenRouter/OpenAI format
            content: msg.content
        })),
        {
            role: "user",
            content: message
        }
    ];

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Digi Dhost",
            },
            body: JSON.stringify({
                "model": "nex-agi/deepseek-v3.1-nex-n1:free",
                "messages": messages,
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenRouter API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.choices[0].message.content;

        res.status(200).json({ response: text });
    } catch (error) {
        console.error('OpenRouter API Error:', error);
        res.status(500).json({ message: 'Error communicating with AI', error: error.message });
    }
}
