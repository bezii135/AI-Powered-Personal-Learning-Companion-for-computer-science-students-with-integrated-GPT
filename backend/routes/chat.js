const express = require('express');
const router = express.Router();
const axios = require('axios');

// POST: /api/chat
router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
 
    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('GPT error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from GPT-4' });
  }
});

module.exports = router;
