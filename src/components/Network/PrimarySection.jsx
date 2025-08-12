import React, { useEffect, useRef, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import "../../styles/Network/PrimarySection.css";
import image from "../../assets/network1.jpg"; // replace with your actual image

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
        EXPERT NETWORK ACCESS SERVICE
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
            Agilityhive Research offers unparalleled access to top-tier experts
             leveraging our extensive network of industry experts spanning over 
             100 sectors and 100+ countries
          </h3>
          <p className="primary-sec__para">
            As a leading executive search firm. in India, 
            we possess a proven track record of identifying and placing right leaders
             and managers who possess the requisite experience, network, business acumen, 
             and ambition to spearhead innovative products and brands.
          </p>
        </div>
      </div>
    </section>
  );
}
