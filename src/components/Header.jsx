import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [spinDone, setSpinDone] = useState(false);

  useEffect(() => {
    const spinTimer = setTimeout(() => setSpinDone(true), 200); // Spin for 2s
    return () => clearTimeout(spinTimer);
  }, []);

  return (
    <div className="hero">
      <div className={`logo-wrapper ${spinDone ? "animate" : ""}`}>
        <img
          src={logo}
          alt="Logo"
          className={`logo-image ${!spinDone ? "spin" : ""}`}
        />
        <span className={`brand-text ${spinDone ? "show-brand" : ""}`}>AHR</span>
      </div>

      <nav className={`navbar ${spinDone ? "show-nav" : ""}`}>
        <div className="navbar-center">
          <ul className="nav-links">
            <li><a href="#">WHAT WE DO</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="login-btn">LOGIN</button>
        </div>
      </nav>

      <header className={`header-content ${spinDone ? "show-content" : ""}`}>
        <div className="mission-statement fade-up">
    EMPOWERING STRATEGIC DECISIONS WITH INNOVATIVE & DATA-POWERED MARKET RESEARCH SOLUTIONS
  </div>
  <div className="intro-box fade-up">
  <p className="intro-text">
    We are a dynamic market research firm based in India, specializing in providing innovative solutions to leading consulting firms, research organizations, and corporations across diverse sectors.
  </p>
  <button className="get-started-btn">GET STARTED
    <span className="arrow-icon">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
  </button>
</div>
      </header>
    </div>
  );
}

export default Header;
