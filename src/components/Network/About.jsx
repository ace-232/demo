import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Network/About.css';

export default function AboutUs() {
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }  // fire as soon as any part is visible
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <div
          ref={contentRef}
          className={`about-us-text fade-up-on-scroll${visible ? ' show' : ''}`}
        >
            <h4> Need insights from the experts? Our Expert Network Access offers instant access to
            industry experts from over 100 sectors across 100+ countries </h4>
          <p>
           Being one of the most trusted executive search firms in India, we have the experience of finding right leaders and
             managers who have the experience, network, business acumen and ambition to drive new 
             products and brands.
          </p>
        </div>
      </div>
    </section>
  );
}
