import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logoAHR.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* about */}
        <div className="footer-col about">
          <img src={logo} alt="Agilityhive Research logo" className="footer-logo" />
          <p>
            Agilityhive Research dynamic market research firm based in India. We specialize in delivering innovative solutions
          </p>
          <a href="#" className="read-more">Read More</a>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

        {/* quick links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Why Us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Expert Network Access</a></li>
            <li><a href="#">On-Demand Research Support</a></li>
            <li><a href="#">Competition Benchmarking</a></li>
            <li><a href="#">Lead Generation Service</a></li>
          </ul>
        </div>

        {/* contact info */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>Noida, India.</p>
          <p>connect@agilityhiveresearch.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Agilityhive Research. All rights reserved.
      </div>
    </footer>
  );
}
