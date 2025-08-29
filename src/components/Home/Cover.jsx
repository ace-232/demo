import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Home/Cover.css";
import arrowIcon from "../../assets/next.png";

export default function Cover() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // read session flag before first paint
  const hasShownRef = useRef(
    typeof window !== "undefined" && sessionStorage.getItem("ahrCoverShown") === "1"
  );

  // should we play the white overlay this time?
  const shouldPlay = isHome && !hasShownRef.current;

  const [showWhite, setShowWhite] = useState(shouldPlay);

  useEffect(() => {
    if (!shouldPlay) return;

    const timer = setTimeout(() => {
      setShowWhite(false);
      hasShownRef.current = true;
      sessionStorage.setItem("ahrCoverShown", "1");
    }, 1500);

    return () => clearTimeout(timer);
  }, [shouldPlay]);

  return (
    <div className="cover-container">
      {/* White overlay: only once per session */}
      {showWhite && <div className="white-overlay" />}

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
