// pages/chat.js (Chat Page)
import './style.css'
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setLoading(true);

    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setMessages([...messages, { text: userMessage, sender: 'user' }, { text: data.message, sender: 'gpt' }]);
    setUserMessage('');
    setLoading(false);
  };

  return (
    <div>
      <h1>AI Chat</h1>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.sender}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
