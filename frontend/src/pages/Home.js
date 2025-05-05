import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure this CSS file exists

const Home = () => {
  return (
    <>
      <header>
        <div className="logo">Space and Time</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/gptchat">AI Companion</Link></li>
            <li><Link to="/tracker">Tracker</Link></li>
            <li><Link to="/login" className="button">Login</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Blazing Fast Queries. Decentralized Data Warehouse.</h1>
          <p>Join the fastest and most secure decentralized data warehouse.</p>
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
    </>
  );
};

export default Home;
