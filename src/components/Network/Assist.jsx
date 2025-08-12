import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import "../../styles/Network/Assist.css";

const CARDS = [
  {
    title: "ENTERPRISES",
    tone: "dark",
    text:
      "Agilityhive’s expert network delivers real‑time solutions to help enterprises overcome challenges and seize opportunities. Through rapid assessments and expert consultations, we provide decision‑makers with the insights needed to navigate their industries effectively.",
    bullets: ["Business Strategy", "Product Development", "Drive Innovation", "Expansion Decisions"],
  },
  {
    title: "PRIVATE EQUITY & HV'S",
    tone: "light",
    text:
      "Agilityhive's knowledge center provides real‑time market analysis and expert commentary on potential investment opportunities. Stay informed about market dynamics and make informed investment decisions.",
    bullets: ["Due Diligence", "Portfolio Management", "Market Opportunity"],
  },
  {
    title: "CONSULTING & ADVISORY",
    tone: "dark",
    text:
      "Leverage the power of domain‑specific expertise to drive your advisory projects. Our team provides tailored insights and guidance to help you achieve your goals.",
    bullets: ["Market Assessment", "Opportunity Assessment", "Industry Trends", "Industry Best Practices"],
  },
];

export default function Assist() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="assist" ref={ref}>
      <h2 className={`assist__heading ${show ? "show" : ""}`}>WHOM WE CAN ASSIST</h2>

      <div className={`assist__grid ${show ? "show" : ""}`}>
        {CARDS.map((c) => (
          <article key={c.title} className={`assist__card assist__card--${c.tone}`}>
            <div className="assist__badge">
              <span className="assist__badgeInner"><FaCheck /></span>
            </div>

            <h3 className="assist__title">{c.title}</h3>
            <p className="assist__text">{c.text}</p>

            <ul className="assist__list">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
