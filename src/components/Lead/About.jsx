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
          <p>
          We recognize that low-quality data and ineffective segmentation can
           impede your lead generation initiatives. Our services are designed 
           to meticulously analyze your database, identify high-value prospects,
            and segment them strategically. Our team actively engages with potential 
            customers, guiding them through the sales process, enabling you to focus
             on maximizing conversions. Expertise of our experienced team, allow us to
              revolutionize your B2B lead generation strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
