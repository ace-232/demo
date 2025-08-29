import React from "react";
import headerImage from "../../assets/Case study.jpg"; // ← adjust path/case to match your folder
import "../../styles/WhatWeDo/Cover.css";

export default function Cover() {
  return (
    <div
      className="what-we-do-hero"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="what-we-do-overlay" />
    </div>
  );
}