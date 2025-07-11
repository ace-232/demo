// src/components/WhatWeDo/About.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../styles/WhatWeDo/About.css";
import mainImage  from "../../assets/working.jpg";
import floatImage from "../../assets/analytics.jpg";

export default function About() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="feature-section" ref={containerRef}>
        <h2 className="section-heading">WE POWER YOUR GROWTH</h2>
        <div className="feature-content">
      <div className="feature-images">
        <img
    src={mainImage}
    alt="Team working"
    className={`main-img ${animate ? "slide-in-left" : ""}`}
 />
        <img
          src={floatImage}
          alt=""
          className={`float-img ${animate ? "animate" : ""}`}
        />
      </div>

      <div className="feature-text">
        <h2 className={`feature-title ${animate ? "slide-down" : ""}`}>
          WE ARE
        </h2>
        <p className={`feature-desc ${animate ? "slide-in-right" : ""}`}>
          A dynamic trustworthy and forward-thinking market research firm based in India, specializing in providing innovative
           solutions to leading consulting firms, research organizations, and corporations across diverse
            sectors.
        </p>
      </div>
      </div>
    </section>
  );
}
