import React from "react";
import { Link } from "react-router-dom";          // ⬅️ add this
import "../../styles/Home/Footer.css";
import logo from "../../assets/logoAHR.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* about */}
        <div className="footer-col about">
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="Agilityhive Research logo" className="footer-logo" />
          </Link>

          <p>
            Agilityhive Research dynamic market research firm based in India. We specialize in
            delivering innovative solutions
          </p>

          <Link to="/about-us" className="read-more">Read More</Link>

          <div className="socials">
            <a href="https://www.linkedin.com/company/agilityhive-research/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:connect@agilityhiveresearch.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* quick links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/case-study">Case Studies</Link></li>
            <li><Link to="/services/expert-network-access">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        {/* services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/expert-network">Expert Network Access</Link></li>
            <li><Link to="/services/lead-generation">Lead Generation Service</Link></li>
            <li><Link to="/services/competitive-benchmarking">Competition Benchmarking</Link></li>
          </ul>
        </div>

        {/* contact info */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>Noida, India.</p>
          <p><a href="mailto:connect@agilityhiveresearch.com">connect@agilityhiveresearch.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Agilityhive Research. All rights reserved.
      </div>
    </footer>
  );
}
