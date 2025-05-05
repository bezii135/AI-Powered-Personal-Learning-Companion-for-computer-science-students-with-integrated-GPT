import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header>
        <div className="logo">Personalized learning companion</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Course</Link></li>
            <li><Link to="/gptchat">AI Companion</Link></li>
            <li><Link to="/">Tracker</Link></li>
            <li><Link to="/login" className="button">Login</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>A new way to learn computer science.</h1>
          <p>Join the fastest and most secure way to learn.</p>
          <Link to="/login" className="button">Get Started</Link>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Transactions + Analytics</h2>
            <p>Join on-chain and off-chain data.</p>
            <Link to="/course" className="button">Learn More</Link>
          </div>
          <div className="feature">
            <h2>Proof of SQL™</h2>
            <p>Trustless smart contract execution.</p>
            <Link to="/gptchat" className="button">Learn More</Link>
          </div>
          <div className="feature">
            <h2>Web3-Native Tools</h2>
            <p>Developer platform for dApps.</p>
            <Link to="/course" className="button">Learn More</Link>
          </div>
          <div className="feature">
            <h2>Enterprise Scale</h2>
            <p>Easy & Elastic Scalability for tons of TBs.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Space and Time. All rights reserved.</p>
      </footer>
    </div>
  );
}

