import React, { useEffect, useRef, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import "../../styles/Network/PrimarySection.css";
import image from "../../assets/lead.jpg"; // replace with your actual image

export default function PrimarySection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="primary-sec" ref={ref}>
      <h2 className={`primary-sec__heading slide-left ${show ? "show" : ""}`}>
        LEAD GENERATION SERVICE
      </h2>

      <div className="primary-sec__content">
        <div className={`primary-sec__media slide-left ${show ? "show" : ""}`}>
          <img src={image} alt="Research in progress" />
          <span className="network-icon">
            <FaGlobeAmericas />
          </span>
        </div>

        <div className={`primary-sec__text slide-up ${show ? "show" : ""}`}>
          <h3 className="primary-sec__title">
            Our services are designed to meticulously analyze your database, identify
             high-value prospects, and segment them strategically
          </h3>
          <p className="primary-sec__para">
            We recognize that low-quality data and ineffective segmentation can impede your lead
             generation initiatives.Our team actively engages with potential customers, guiding them through the sales process, 
            enabling you to focus on maximizing conversions. Expertise of our experienced team, allow 
             to revolutionize your B2B lead generation strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
