import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";        // ← import Link
import './Navbar.css';
import logo from "./assets/logo2.png";

function Navbar() {
  const [spinDone, setSpinDone] = useState(false);
  const location = useLocation(); 
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef   = useRef(null);

  useEffect(() => {
    const spinTimer = setTimeout(() => setSpinDone(true), 150); // Spin for 0.2s
    return () => clearTimeout(spinTimer);
  }, []);

useEffect(() => {
    function handleClickOutside(e) {
      if (
        servicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

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
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li
          ref={dropdownRef}
          className={`nav-item dropdown ${servicesOpen ? "open" : ""}`}
        >
          {/* Use a button here so clicking doesn’t navigate away */}
          <button
            type="button"
            className="nav-link"
            onClick={() => setServicesOpen((o) => !o)}
          >
            SERVICES
          </button>

          <ul className="dropdown-menu">
            <li>
              <NavLink
                to="/services/expert-network-access"
                className="dropdown-link"
                onClick={() => setServicesOpen(false)}
              >
                Expert Network Access
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/lead-generation"
                className="dropdown-link"
                onClick={() => setServicesOpen(false)}
              >
                Lead Generation Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/competition-benchmarking"
                className="dropdown-link"
                onClick={() => setServicesOpen(false)}
              >
                Competition Benchmarking
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
            <NavLink
              to="/case-study"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              CASE STUDY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              CAREER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;