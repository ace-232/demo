import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";        // ← import Link
import './Navbar.css';
import logo from "./assets/logo2.png";

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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/what-we-do"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              WHAT WE DO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;