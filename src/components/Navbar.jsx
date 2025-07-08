import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo2.png";

function Navbar() {
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
    </div>
  );
}

export default Navbar;