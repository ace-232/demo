import React from "react";
import headerImage from "../../assets/Aboutus.jpg"; // ← adjust path/case to match your folder
import "../../styles/AboutUs/Cover.css";

export default function Cover() {
  return (
    <div
      className="what-we-do-hero"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      
      <h1 className="what-we-do-title">ABOUT US</h1>
    </div>
  );
}
