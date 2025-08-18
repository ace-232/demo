import React, { useEffect, useRef, useState } from "react";
import {
  FaChessKnight,   // Business strategies
  FaChartLine,     // Financial performance
  FaBoxes,         // Product portfolio
  FaTags,          // Pricing strategies
  FaChartPie,      // Market share
  FaGlobeAmericas, // Geographic footprint
  FaUsers,         // Customer base
  FaBolt,          // Recent developments
  FaRoad           // Future plans
} from "react-icons/fa";
import "../../styles/Competition/CompetitiveAnalysis.css";

const ITEMS = [
  { icon: FaChessKnight,   label: "Business strategies" },
  { icon: FaChartLine,     label: "Financial performance" },
  { icon: FaBoxes,         label: "Product portfolio" },
  { icon: FaTags,          label: "Pricing strategies" },
  { icon: FaChartPie,      label: "Market share" },
  { icon: FaGlobeAmericas, label: "Geographic footprint" },
  { icon: FaUsers,         label: "Customer base" },
  { icon: FaBolt,          label: "Recent developments" },
  { icon: FaRoad,          label: "Future plans" },
];

export default function CompetitiveAnalysis() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ca" ref={ref}>
      <h2 className="ca__heading">
        Agilityhive’s <span>Competitive Analysis</span> includes
      </h2>

      <p className="ca__lead">
        Agilityhive Research’s comprehensive competitive analysis report provides a detailed
        assessment of your market position, encompassing:
      </p>

      <div className={`ca__grid ${show ? "show" : ""}`}>
        {ITEMS.map(({ icon: Icon, label }) => (
          <article key={label} className="ca__item">
            <div className="ca__disc">
              <Icon className="ca__icon" aria-hidden />
            </div>
            <h3 className="ca__label">{label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
