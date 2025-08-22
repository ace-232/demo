import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import "../../styles/Lead/ImpactingBrands.css";

const LEFT = [
  "New Customer Acquisition",
  "Revenue Maximization",
  "Cloud Sales & Adoption",
];

const RIGHT = [
  "Geo Expansion",
  "Customer Retention",
  "Cross / Up-Sell",
];

export default function ImpactingBrands() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="impact" ref={ref}>
      <h2 className={`impact__title slide-left ${show ? "show" : ""}`}>
        Impacting Brands in the World
      </h2>

      <div className="impact__grid">
        {/* Left list */}
        <ul className={`impact__list ${show ? "reveal" : ""}`}>
          {LEFT.map((txt, i) => (
            <li key={txt} className="impact__item" style={{ "--i": i }}>
              <span className="impact__tick" aria-hidden><FaCheck /></span>
              <span className="impact__label">{txt}</span>
            </li>
          ))}
        </ul>

        {/* Center badge */}
        <div className="impact__center">
          <div className={`impact__badge ${show ? "show" : ""}`}>
            <span>OUR</span>
            <span>COMPETENCIES</span>
          </div>
        </div>

        {/* Right list */}
        <ul className={`impact__list impact__list--right ${show ? "reveal" : ""}`}>
          {RIGHT.map((txt, i) => (
            <li key={txt} className="impact__item" style={{ "--i": i }}>
              <span className="impact__tick" aria-hidden><FaCheck /></span>
              <span className="impact__label">{txt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
