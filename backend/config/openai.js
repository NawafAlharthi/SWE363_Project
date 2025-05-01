const OpenAI = require('openai');
require('dotenv').config();

// For debugging
console.log('OpenAI API Key exists:', !!process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.openai.com/v1' // Explicitly set the base URL
});

const generateAIResponse = async (question) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an academic assistant. Provide clear, concise, and accurate answers to academic questions. If you're unsure about something, say so. Always maintain a professional and educational tone."
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate AI response: ' + error.message);
  }
};

module.exports = {
  generateAIResponse
}; 