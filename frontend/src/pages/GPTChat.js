import './gpt.css';
import { useState, useRef, useEffect } from 'react';

export default function GPTChat() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Please type a message before sending.', sender: 'system' },
      ]);
      return;
    }

    const updatedMessages = [...messages, { text: userMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages([...updatedMessages, { text: data.message, sender: 'gpt' }]);
    } catch (error) {
      console.error('Error fetching GPT response:', error);
      setMessages([
        ...updatedMessages,
        { text: 'Sorry, there was an error getting the response from GPT.', sender: 'system' },
      ]);
    }

    setUserMessage('');
    setLoading(false);
  };

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <header>
        <div className="logo">GPT Chat</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="hero">
        <h1>Welcome to GPT Chat</h1>
        <p>Talk to AI, get answers in seconds!</p>
      </div>

      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.sender}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="button" onClick={handleSendMessage} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 GPT Chat. All rights reserved.</p>
      </footer>
    </div>
  );
}
