import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo2.png";

function Navbar() {
  const location = useLocation();

  // Show the spin ONLY on "/" AND only once per session
  const shouldSpinNow =
    location.pathname === "/" && !sessionStorage.getItem("ahrSpinShown");

  // If no spin, start in the "after animation" state
  const [spinDone, setSpinDone] = useState(!shouldSpinNow);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);

  // Run the spin once per session on the homepage
  useEffect(() => {
    if (!shouldSpinNow) return;
    const t = setTimeout(() => {
      setSpinDone(true);
      sessionStorage.setItem("ahrSpinShown", "1");
    }, 800); // a short, snappy spin
    return () => clearTimeout(t);
  }, [shouldSpinNow]);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target) &&
          hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
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
  }, [isMenuOpen, servicesOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="hero">
      {/* White overlay ONLY during the spin */}
       {shouldSpinNow && !spinDone && <div className="nav-flash" />}
      <div
        className={`logo-wrapper ${
          shouldSpinNow && !spinDone ? "centered" : "animate"
        }`}
      >
        <img
          src={logo}
          alt="Logo"
          className={`logo-image ${shouldSpinNow && !spinDone ? "spinning" : ""}`}
        />
        <span className={`brand-text ${spinDone ? "show-brand" : ""}`}>AHR</span>
      </div>

      {/* Hamburger (mobile) */}
      <button
        ref={hamburgerRef}
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-nav"
        onClick={() => setIsMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        ref={navRef}
        id="main-nav"
        className={`navbar ${spinDone ? "show-nav" : ""} ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              ABOUT&nbsp;US
            </NavLink>
          </li>

          <li ref={dropdownRef} className={`nav-item dropdown ${servicesOpen ? "open" : ""}`}>
            {/* Button so mobile tap doesn’t navigate */}
            <button
              type="button"
              className="nav-link"
              aria-expanded={servicesOpen}
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
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              CASE STUDY
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/career"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              CAREER
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              CONTACT&nbsp;US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
