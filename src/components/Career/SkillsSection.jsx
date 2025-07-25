// src/components/Career/SkillsSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { FaDotCircle } from "react-icons/fa";
import "../../styles/Career/SkillsSection.css";

const skills = [
  "Intellectual Curiosity",
  "Learning Agility",
  "Analytical Aptitude",
  "Leadership Potential",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

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
    <section className="skills-section" ref={ref}>
      <h2 className={`skills-heading ${inView ? "slide-in-left" : ""}`}>
        Skills We Value
      </h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill}
            className={`skills-box ${inView ? "fade-up" : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <FaDotCircle className="skill-icon" />
            <span className="skill-text">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
