import React from "react";
import headerImage from "../../assets/contact.png"; // ← adjust path/case to match your folder
import "../../styles/WhatWeDo/Cover.css";

export default function Cover() {
  return (
    <div
      className="what-we-do-hero"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <h1 className="what-we-do-title">CONTACT US</h1>
    </div>
  );
}