import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutUs.css';
import aboutUsImg from "../assets/about-us.jpg";

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
        <div className="about-us-image">
          <img src={aboutUsImg} alt="Team working together" />
        </div>

        <div
          ref={contentRef}
          className={`about-us-text fade-up-on-scroll${visible ? ' show' : ''}`}
        >
          <h2>About Us</h2>
          <p>
            Welcome to Agility Hive Research, an energetic Indian market research company. Our expertise lies in providing cutting-edge solutions to top academic institutions, corporations, and consulting firms across diverse industries. Our team of professionals is committed to delivering intelligent, data-driven analysis so you can reach your strategic objectives and make well-informed decisions.
          </p>
          <button className="know-more-btn">
            Know More
            <span className="arrow-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
