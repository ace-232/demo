import React, { useEffect, useRef, useState } from "react";
import { FaLightbulb, FaSlidersH, FaChartLine, FaHandsHelping } from "react-icons/fa";
import "../../styles/Competition/WhyUs.css";

const ITEMS = [
  {
    Icon: FaLightbulb,
    title: "Strategic Guidance",
    text:
      "We transform data into meaningful strategies, offering recommendations that refine your market position and support better decision-making.",
  },
  {
    Icon: FaSlidersH,
    title: "Tailored Benchmarking",
    text:
      "Our benchmarking solutions are customized to your sector, organizational objectives, and critical performance indicators.",
  },
  {
    Icon: FaChartLine,
    title: "Real-Time Market Monitoring",
    text:
      "Stay ahead by tracking competitors’ moves, pricing strategies, and marketplace shifts as they occur.",
  },
  {
    Icon: FaHandsHelping,
    title: "End-to-End Support",
    text:
      "From data collection to strategy execution, we provide comprehensive assistance to guarantee measurable results.",
  },
];

export default function WhyUs() {
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
    <section className="bmw" ref={ref}>
      <h2 className={`bmw__heading slide-left ${show ? "show" : ""}`}>
        What Sets Our Benchmarking Services Apart
      </h2>

      <div className="bmw__grid">
        {ITEMS.map(({ Icon, title, text }) => (
          <article key={title} className={`bmw__card slide-up ${show ? "show" : ""}`}>
            <span className="bmw__iconTile">
              <Icon className="bmw__icon" aria-hidden />
            </span>
            <h3 className="bmw__title">{title}</h3>
            <p className="bmw__text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
