import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

// Create an OpenAI instance with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.message;

    try {
      // Get the response from GPT-4
      const gptResponse = await getGPTResponse(userMessage);
      res.status(200).json({ message: gptResponse });
    } catch (error) {
      console.error('Error fetching GPT response:', error);
      res.status(500).json({ error: 'Failed to fetch GPT response' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Function to get GPT response using OpenAI's GPT-4 model
async function getGPTResponse(message) {
  try {
    // Call GPT-4 API with the user's message as input
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Use the GPT-4 model
      messages: [{ role: 'user', content: message }],
    });

    // Return the response text from GPT-4
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error('Failed to fetch GPT response');
  }
}
