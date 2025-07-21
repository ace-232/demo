import React from "react";
import headerImage from "../../assets/competition.jpg"; // ← adjust path/case to match your folder
import "../../styles/AboutUs/Cover.css";

export default function Cover() {
  return (
    <div
      className="what-we-do-hero"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="what-we-do-overlay" />
      <h1 className="what-we-do-title">COMPETITION BENCHMARKING</h1>
    </div>
  );
}