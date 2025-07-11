import React, { useEffect, useRef, useState } from "react";
import '../../styles/Home/Services.css';
import expertImg from "../../assets/network.jpg";
import leadGenImg from "../../assets/lead.jpg";
import benchImg from "../../assets/comp.jpg";
import knowMoreIcon from "../../assets/know-icon.png";

const services = [
  {
    img: expertImg,
    alt: "Expert Network Access",
    title: "Expert Network Access",
    text:
      "Connect instantly with industry veterans and subject-matter experts to get the insights you need—when you need them.",
  },
  {
    img: leadGenImg,
    alt: "Lead Generation Service",
    title: "Lead Generation Service",
    text:
      "Fill your pipeline with high-quality prospects sourced and qualified by our data-driven outreach and nurturing strategies.",
  },
  {
    img: benchImg,
    alt: "Competition Benchmarking",
    title: "Competition Benchmarking",
    text:
      "Stay ahead of the pack with comprehensive market analyses, side-by-side feature comparisons, and performance KPIs.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services-section" ref={ref}>
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
  Your one-stop suite for expert connections, qualified leads, and competitive insights.
</p>
      <div className={`services-cards ${visible ? "show" : ""}`}>
        {services.map((svc) => (
          <div key={svc.title} className="service-card">
            <div className="service-image">
              <img src={svc.img} alt={svc.alt} />
            </div>
            <h3 className="service-heading">{svc.title}</h3>
            <p className="service-text">{svc.text}</p>
            <a href="#" className="service-link">
              <img src={knowMoreIcon} alt="" className="service-icon" />
              Know More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
