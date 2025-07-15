import React, { useEffect, useState } from "react";
import "../../styles/AboutUs/Cover.css";
import headerImage from "../../assets/case.jpg";

export default function WhatWeDo() {
  const [showWhite, setShowWhite] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhite(false), 1600); // 2s white flash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="what-we-do-page">
      <div className="what-we-do-hero-container">
        {showWhite && <div className="white-overlay" />}

        <div
          className="what-we-do-hero"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="what-we-do-overlay" />
          <h1 className="what-we-do-title">CASE STUDY</h1>
        </div>
      </div>

      {/* …other sections… */}
    </div>
  );
}
