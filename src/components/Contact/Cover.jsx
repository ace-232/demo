import React from "react";
import headerImage from "../../assets/contact.jpg"; // ← adjust path/case to match your folder
import "../../styles/WhatWeDo/Cover.css";

export default function Cover() {
  return (
    <div
      className="what-we-do-hero"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="what-we-do-overlay" />
      <h1 className="what-we-do-title">Get In Touch With An Expert</h1>
    </div>
  );
}