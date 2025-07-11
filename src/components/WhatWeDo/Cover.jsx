import React, { useEffect, useState } from "react";
import Navbar from '../Home/Navbar';
import "../../styles/WhatWeDo/Cover.css";
import headerImage from "../../assets/what-we-do.jpg";

export default function WhatWeDo() {
  const [showWhite, setShowWhite] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhite(false), 1600); // 2s white flash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="what-we-do-page">
      <Navbar />

      <div className="what-we-do-hero-container">
        {showWhite && <div className="white-overlay" />}

        <div
          className="what-we-do-hero"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="what-we-do-overlay" />
          <h1 className="what-we-do-title">WHAT WE DO</h1>
        </div>
      </div>

      {/* …other sections… */}
    </div>
  );
}
