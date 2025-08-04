import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import headerImage from "../../assets/About.jpg";
import "../../styles/AboutUs/Cover.css";

export default function Cover() {
  return (
    <section
      className="about-cover"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {/* breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <FaHome />
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">About Us</span>
      </nav>

      {/* text block */}
      <div className="cover-text">
        <h1 className="cover-title slide-in-left">
          Empowering strategies through
          <br />
          innovative market insights
        </h1>
        <p className="cover-subtitle slide-in-right">
          A dynamic trustworthy and forward-thinking expert network firm based in India,
           specializing in providing innovative solutions to leading consulting firms, 
           research organizations, and corporations across diverse sectors.
        </p>
      </div>
    </section>
  );
}
