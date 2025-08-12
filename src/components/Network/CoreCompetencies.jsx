// BestPractices.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaMoneyBillWave,
  FaNetworkWired,
  FaMicroscope
} from "react-icons/fa";
import "../../styles/Network/CoreCompetencies.css";

const ITEMS = [
  { Icon: FaAward,         title: "Deep industry expertise",        sub: "Efficient time-bound process", aria: "Expertise" },
  { Icon: FaMoneyBillWave, title: "Cost-effective solutions",       sub: "Optimized value",              aria: "Cost-effective" },
  { Icon: FaNetworkWired,  title: "Vast professional network",      sub: "Established & trusted",        aria: "Professional network" },
  { Icon: FaMicroscope,    title: "Comprehensive research",         sub: "Advanced capabilities",        aria: "Research capabilities" },
];

export default function BestPractices() {
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
    <section className="bp" ref={ref}>
      <h2 className="bp__heading">Our <span>Core Competencies</span> include</h2>
      <div className={`bp__grid ${show ? "show" : ""}`}>
        {ITEMS.map(({ Icon, title, sub, aria }) => (
          <article className="bp__item" key={title}>
            <div className="bp__circle">
              <Icon className="bp__icon" aria-label={aria} />
            </div>
            <h3 className="bp__title">{title}</h3>
            <p className="bp__sub">{sub}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
