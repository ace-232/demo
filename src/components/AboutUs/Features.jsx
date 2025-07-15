import React, { useEffect, useRef, useState } from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaLock,
  FaUserShield,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import "../../styles/AboutUs/Features.css";

const features = [
  {
    icon: <FaDollarSign />,
    title: "Instant Savings",
    desc:
      "Get immediate savings on every purchase, powered by AI to optimize your transactions.",
  },
  {
    icon: <FaChartLine />,
    title: "Real‑Time Insights",
    desc:
      "Make smarter decisions with live data and actionable insights, delivered in real‑time to stay ahead of the curve.",
  },
  {
    icon: <FaLock />,
    title: "Secure Transactions",
    desc:
      "Prioritize safety with cutting‑edge encryption and fraud detection on every transaction.",
  },
  {
    icon: <FaUserShield />,
    title: "Adaptive Systems",
    desc:
      "Leverage AI‑driven systems that evolve to your business needs for maximum efficiency.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Network",
    desc:
      "Access our global network of experts to gain sector‑specific knowledge whenever you need it.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc:
      "Enjoy 24/7 premium support to resolve any issue and keep your operations running smoothly.",
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
