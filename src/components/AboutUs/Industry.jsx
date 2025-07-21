import React, { useEffect, useRef, useState } from "react";
import {
  FaCar,
  FaFlask,
  FaStore,
  FaUniversity,
  FaTruck,
  FaWifi,
  FaUtensils,
  FaFilm,
} from "react-icons/fa";
import "../../styles/WhatWeDo/Industry.css";

const industries = [
  {
    title: "Automotive",
    icon: <FaCar className="icon" />,
    desc:
      "Drive insights into manufacturing trends, EV adoption, and consumer preferences shaping mobility’s future.",
  },
  {
    title: "Chemicals",
    icon: <FaFlask className="icon" />,
    desc:
      "Analyze global chemical demand, innovations in sustainable materials, and regulatory compliance.",
  },
  {
    title: "Retail",
    icon: <FaStore className="icon" />,
    desc:
      "Track shopper behavior and in-store performance to fine-tune merchandising strategies.",
  },
  {
    title: "Banking & Finance",
    icon: <FaUniversity className="icon" />,
    desc:
      "Gauge customer satisfaction and regulatory shifts to craft more competitive financial products.",
  },
  {
    title: "Logistics & Transportation",
    icon: <FaTruck className="icon" />,
    desc:
      "Optimize routing and capacity planning through real-time demand forecasting.",
  },
  {
    title: "IT & Telecom",
    icon: <FaWifi className="icon" />,
    desc:
      "Map technology adoption trends to refine service offerings and increase subscriber retention.",
  },
  {
    title: "Food & Beverage",
    icon: <FaUtensils className="icon" />,
    desc:
      "Test new flavor concepts and packaging designs to accelerate product innovation.",
  },
  {
    title: "Media & Entertainment",
    icon: <FaFilm className="icon" />,
    desc:
      "Measure audience engagement and content performance to shape winning programming.",
  },
];

export default function Industry() {

const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

   return (
    <section
     ref={sectionRef}             /* ← attach the ref here */
     className="industry-section"
   >
      <h2 className={`industry-heading ${inView ? "slide-in-left" : ""}`}>
        OUR CORE INDUSTRY FOCUS
      </h2>
      <div className="industry-grid">
        {industries.map((item) => (
          <div
            key={item.title}
            className={`industry-box ${inView ? "slide-up" : ""}`}
          >
            <div className="icon">{item.icon}</div>
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}