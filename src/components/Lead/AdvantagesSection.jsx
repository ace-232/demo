import React, { useEffect, useRef, useState } from 'react';
import { FaChartLine, FaDollarSign, FaRocket } from 'react-icons/fa';
import '../../styles/Lead/AdvantagesSection.css';

export default function AdvantagesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="advantages-section">
      <h2
        className={`advantages-heading ${inView ? 'slide-in-left' : ''}`}
      >
        Our lead generation services can transform your business by
        providing these advantages
      </h2>

      <div className={`advantages-grid ${inView ? 'visible' : ''}`}>
        <div className="advantages-card">
          <FaChartLine className="advantages-icon" />
          <h3>Scalability</h3>
          <p>
            Agilityhive Research provides customized lead generation
            services that scale seamlessly with your business, ensuring
            efficient growth.
          </p>
        </div>

        <div className="advantages-card">
          <FaDollarSign className="advantages-icon" />
          <h3>Higher Revenue</h3>
          <p>
            By utilizing Agilityhive’s lead generation services, your
            business can expect to see a significant increase in sales and
            revenue, leading to long-term growth.
          </p>
        </div>

        <div className="advantages-card">
          <FaRocket className="advantages-icon" />
          <h3>Superior Growth</h3>
          <p>
            With our team’s deep expertise, your business can achieve
            exceptional growth through targeted strategies that deliver
            high-quality leads and expand your market reach.
          </p>
        </div>
      </div>
    </section>
  );
}
