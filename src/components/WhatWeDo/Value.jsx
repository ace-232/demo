import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import valueImage from "../../assets/value.jpg"; // swap in your own
import "../../styles/WhatWeDo/Value.css";

const features = [
  "Open and effective communication",
  "Strong teamwork and collaboration",
  "Adherence to the highest ethical standards",
  "Uncompromising integrity and honesty",
  "Transparent business practices",
  "Continuous innovation and improvement",
  "Embracing diversity and inclusion",
];

export default function Value() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="value-section" ref={ref}>
      <div className="value-header">
        <h2 className={`value-heading ${inView ? "slide-up" : ""}`}>
          Our Core Values
        </h2>
        <p className={`value-intro ${inView ? "slide-in-left" : ""}`}>
          Leveraging our experienced team and robust proprietary panels, we deliver exceptional 
          value through a comprehensive range of market research services.Our core values underpin our
           commitment to delivering exceptional service.
        </p>
      </div>

      <div className="value-main">
        <div className={`value-features-box ${inView ? "fade-in" : ""}`}>
          <ul>
            {features.map((f, i) => (
              <li key={i}
              style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        transitionDelay: inView ? `${0.5 + i * 0.15}s` : "0s"
      }}
              >
                <FaCheckCircle className="value-icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`value-img-container ${inView ? "slide-in-right" : ""}`}>
          <img src={valueImage} alt="Illustration of our values" />
        </div>
      </div>
    </section>
  );
}
