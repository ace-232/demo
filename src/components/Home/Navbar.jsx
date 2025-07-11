import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";        // ← import Link
import '../../styles/Home/Navbar.css';
import logo from "../../assets/logo2.png";

function Navbar() {
  const [spinDone, setSpinDone] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const spinTimer = setTimeout(() => setSpinDone(true), 150); // Spin for 0.2s
    return () => clearTimeout(spinTimer);
  }, []);

const isActive = (p) => location.pathname === p;

  return (
    <div className="hero">
      <div className={`logo-wrapper ${spinDone ? "animate" : ""}`}>
        <img
          src={logo}
          alt="Logo"
          className={`logo-image ${!spinDone ? "spin" : ""}`}
        />
        <span className={`brand-text ${spinDone ? "show-brand" : ""}`}>
          AHR
        </span>
      </div>

      <nav className={`navbar ${spinDone ? "show-nav" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/what-we-do"
              className={`nav-link ${isActive("/what-we-do") ? "active" : ""}`}
            >
              WHAT WE DO
            </Link>
          </li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CAREER</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;