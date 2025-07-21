import React, { useEffect, useState, useRef } from "react";
import {
  FaUserCheck,
  FaChartLine,
  FaSearch,
  FaClock,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import '../../styles/Network/CoreCompetencies.css';

const competencies = [
  { title: "Deep industry expertise", icon: <FaUserCheck /> },
  { title: "Cost‑effective solutions", icon: <FaChartLine /> },
  { title: "Comprehensive research capabilities", icon: <FaSearch /> },
  { title: "Efficient, time‑bound processes", icon: <FaClock /> },
  { title: "Robust architecture", icon: <FaProjectDiagram /> },
  { title: "A vast and established professional network", icon: <FaUsers /> },
];

export default function CoreCompetencies() {
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
    <section className="competencies-section" ref={sectionRef}>
      <h2
        className={`competencies-heading ${
          inView ? "slide-in-right" : ""
        }`}
      >
        Our core competencies include:
      </h2>

      <div className="competencies-grid">
        {competencies.map((item, i) => (
          <div
            key={item.title}
            className={`competency-box ${
              inView ? "slide-in-left" : ""
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="competency-icon">{item.icon}</div>
            <div className="competency-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
