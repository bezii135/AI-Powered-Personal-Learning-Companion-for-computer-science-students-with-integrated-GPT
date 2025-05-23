import { useState } from 'react';
import './style.css'; // Optional: Your CSS styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Example dummy login logic
    if (email === 'user@example.com' && password === 'password123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password');
    }

    // If using backend:
    /*
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    setMessage(data.message);
    */
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className="login-message">{message}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
