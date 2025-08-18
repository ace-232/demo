import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import "../../styles/Competition/CompetitorAdvantages.css";

const CARDS = [
  {
    tone: "dark",
    title: "Analyze Competitor Strategies",
    text:
      "Address challenging questions about your competitors with confidence. Integrate fresh analysis to enhance your organization’s strategic choices.",
  },
  {
    tone: "light",
    title: "Pinpoint Your Unique Advantages",
    text:
      "Understand the competitive environment to reveal untapped niches your business can claim. Create a clear strategy to differentiate in a saturated market.",
  },
  {
    tone: "light",
    title: "Identify Potential Threats and Weaknesses",
    text:
      "Avoid blind spots by assessing the external landscape. Robust strategies require awareness of vulnerabilities to prevent failure.",
  },
  {
    tone: "dark",
    title: "Compare Your Performance Against Competitors",
    text:
      "Evaluate performance relative to peers to stay informed on market position, respond quickly to shifts, and spot areas where you may be lagging.",
  },
];

export default function CompetitorAdvantages() {
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
    <section className="adv" ref={ref}>
      <h2 className={`adv__heading slide-left ${show ? "show" : ""}`}>
        Advantages of Competitor Market Analysis, Benchmarking, and Intelligence
      </h2>

      <div className="adv__grid">
        {CARDS.map(({ tone, title, text }, i) => (
          <article key={title} className={`adv__card adv__card--${tone} fan ${show ? "show" : ""} i${i+1}`}>
            <div className="adv__badge">
              <span className="adv__badgeInner"><FaCheck aria-hidden /></span>
            </div>
            <h3 className="adv__title">{title}</h3>
            <p className="adv__text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
