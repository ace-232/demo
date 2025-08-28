import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Footer.css";
import logo from "../../assets/logoAHR.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer--v2">
      <div className="footer-grid">
        {/* Brand / location / email */}
        <div className="f-brand">
            <img src={logo} alt="Agilityhive Research logo" className="footer-logo" />

          <p className="f-region">Noida, India.</p>
          <a className="f-email" href="mailto:connect@agilityhiveresearch.com">
            connect@agilityhiveresearch.com
          </a>
        </div>

        {/* Column 1 – primary links */}
        <nav className="f-col">
          <ul className="f-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/case-study">Case Studies</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Column 2 – analysis links */}
        <nav className="f-col">
          <ul className="f-list">
            <li><Link to="/services/expert-network-access">Expert Network Access</Link></li>
            <li><Link to="/services/lead-generation">Lead Generation Service</Link></li>
            <li><Link to="/services/competition-benchmarking">Competition Benchmarking</Link></li>
          </ul>
        </nav>

        {/* Right – let’s connect + socials */}
        <div className="f-connect">
          <h4 className="f-connect-title">Let’s connect</h4>
          <p className="f-connect-copy">
            Agilityhive Research is expert network firm based in India. We specialize in delivering innovative solutions.
          </p>

          <div className="f-socials-lg">
            
            <a
              className="social-pill li"
              href="https://www.linkedin.com/company/agilityhive-research/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AVANTGAARDE RESEARCH. All rights reserved.
      </div>
    </footer>
  );
}
