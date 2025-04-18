import React, { useState } from 'react';
import axios from 'axios';

const GPTChat = () => {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const handleSend = async () => {
    const res = await axios.post('http://localhost:5000/api/chat', { message: input });
    setReply(res.data.reply);
  };

  return (
    <div>
      <h2>Ask GPT-4 Anything!</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <p><strong>GPT:</strong> {reply}</p>
    </div>
  );
};

export default GPTChat;
