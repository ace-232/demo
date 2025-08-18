import React, { useEffect, useRef, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import "../../styles/Network/PrimarySection.css";
import image from "../../assets/competition.jpg"; // replace with your actual image

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
        COMPETITION BENCHMARKING
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
            In today's dynamic market, sustained success hinges on a company's ability to adapt and evolve
          </h3>
          <p className="primary-sec__para">
           Competitive benchmarking offers invaluable insights to inform strategic decision-making By meticulously
            analyzing your brand against industry peers, we identify opportunities to optimize business
             operations and achieve a competitive advantage. Through rigorous comparison and analysis,
              we empower you to identify industry best practices, anticipate competitor moves, and develop
               proactive strategies to maintain a leadership position. 

          </p>
        </div>
      </div>
    </section>
  );
}
