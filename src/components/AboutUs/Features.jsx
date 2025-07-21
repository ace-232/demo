import React, { useEffect, useRef, useState } from "react";
import {
   FaLightbulb,       // Expertise
  FaGlobeAmericas,   // Global Reach
  FaHandshake,       // Integrity
  FaCheckCircle,     // Quality Focused Approach
  FaUserCheck,       // Client‑Focused Approach
  FaUsersCog
} from "react-icons/fa";
import "../../styles/AboutUs/Features.css";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Expertise",
    desc:
      "Our team of researchers employs a data-driven, consultative approach to provide actionable insights for our clients. Versatile team with extensive research experience across various fields.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Reach",
    desc:
      "Our global reach and deep industry expertise enable us to uncover unique insights for our clients in over 80 countries and across industries.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    desc:
      "Integrity is the cornerstone of our business. We uphold the highest standards of honesty, transparency, and fairness in all our interactions.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Focused Approach",
    desc:
      "Benefit from our efficient resource management and competitive pricing while receiving high-quality results. We believe in a culture of continuous learning and growth, always striving to improve our market research capabilities and exceed client expectations.",
  },
  {
    icon: <FaUserCheck />,
    title: "Client focused approach",
    desc:
      "We as a young team are always committed to delivering exceptional client satisfaction. Our dedicated team combines passion and professionalism to provide you with expert research solutions.We as a young team are always committed to delivering exceptional client satisfaction.",
  },
  {
    icon: <FaUsersCog />,
    title: "Expert Network",
    desc:
      "By leveraging our global network of experts from over 100 sectors across 80+ countries, we provide our clients with actionable insights that drive informed decision-making, all while maintaining affordability.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="help-section" ref={ref}>
      <h2 className={`help-heading ${inView ? "slide-up" : ""}`}>
        WHY US
      </h2>
      <p className={`help-desc ${inView ? "slide-in-left" : ""}`}>
        Deep expertise and research excellence make us the go-to partner for top consulting firms,
         research houses, and large corporations across industries. With more than 10 years of average 
         team experience on research projects, Agilityhive research is young and dynamic market research
          and data collection firm in India. Our local expertise and deep domain knowledge deliver
           valuable insights for clients worldwide.
      </p>
      <div className="help-grid">
        {features.map((f, i) => (
          <div
            key={i}
            className={`help-box ${inView ? "slide-in-right" : ""}`}
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          >
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
