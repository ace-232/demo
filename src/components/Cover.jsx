import React, { useEffect, useState } from "react";
import "../styles/Cover.css";
import arrowIcon from "../assets/next.png";

export default function Cover() {
  const [showWhite, setShowWhite] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhite(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cover-container">
      {showWhite && <div className="white-overlay" />}
      <video
        className="cover-video"
        src="cover3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="dark-overlay" />

      <div className="cover-content">
        <div className="cover-info">
          <p className="cover-sentence">
            Data-driven research driving <br />strategic progress
          </p>
          <a href="#get-started" className="cta-btn">
            GET STARTED
            <img src={arrowIcon} alt="" className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
