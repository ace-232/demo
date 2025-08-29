import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Services.css";

import expertImg from "../../assets/net.png";
import leadGenImg from "../../assets/lead1.png";
import benchImg from "../../assets/comp1.png";
import knowMoreIcon from "../../assets/know-icon.png";

const services = [
  {
    img: expertImg, // used as the small icon image
    alt: "Expert Network Access",
    title: "Expert Network Access",
    text:
      "Connect instantly with industry veterans and subject-matter experts to get the insights you need—when you need them.",
      to: "/services/expert-network-access",
  },
  {
    img: leadGenImg,
    alt: "Lead Generation Service",
    title: "Lead Generation Service",
    text:
      "Fill your pipeline with high-quality prospects sourced and qualified by our data-driven outreach and nurturing strategies.",
      to: "/services/lead-generation",
  },
  {
    img: benchImg,
    alt: "Competition Benchmarking",
    title: "Competition Benchmarking",
    text:
      "Stay ahead of the pack with comprehensive market analyses, side-by-side feature comparisons, and performance KPIs.",
      to: "/services/competition-benchmarking",  
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
        Connect with industry-leading experts, discover qualified leads tailored to your business, and gain real-time competitive insights—all in one powerful platform.
Accelerate your growth, make smarter decisions, and stay ahead in your market with our integrated suite for expert networking, lead generation, and market intelligence.
      </p>

      <div className={`services-cards ${visible ? "show" : ""}`}>
        {services.map((svc) => (
          <article key={svc.title} className="service-card">
            {/* small icon area (you can swap the imported images here) */}
            <div className="service-iconWrap">
              <img src={svc.img} alt={svc.alt} className="service-iconImg" />
            </div>

            <h3 className="service-heading">{svc.title}</h3>
            <p className="service-text">{svc.text}</p>

            <Link to={svc.to} className="service-link" aria-label={`Know more about ${svc.title}`}>
              <img src={knowMoreIcon} alt="" className="service-linkIcon" />
              Know more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
