import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Cover.css";
import arrowIcon from "../../assets/next.png";

export default function Cover() {
  const INTRO_KEY = "ahrIntroShown";

  const alreadyShown = sessionStorage.getItem(INTRO_KEY) === "1";
  const [showWhite, setShowWhite] = useState(!alreadyShown);

  useEffect(() => {
    if (alreadyShown) return;

    console.log("▶ First session: showing white overlay");

    const t = setTimeout(() => {
      console.log("⏱️ Removing white overlay + setting session flag");
      setShowWhite(false);
      sessionStorage.setItem(INTRO_KEY, "1");
    }, 1500);

    return () => clearTimeout(t);
  }, [alreadyShown]);

  return (
    <div className="cover-container">
      {showWhite && (
        <div
          className="white-overlay"
          onClick={() => console.log("✅ White overlay actually rendered")}
        />
      )}

      <video
        className="cover-video"
        src="/demo/home.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="dark-overlay" />

      <div className="cover-content">
        <div className="cover-info">
          <p className="cover-sentence">
            Data-driven research driving <br />
            strategic progress
          </p>
          <Link to="/contact" className="cta-btn" aria-label="Go to Contact">
            GET STARTED
            <img src={arrowIcon} alt="" className="btn-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
