import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Home/Testimonial.css';

import arrowLeft from '../../assets/back.png';
import arrowRight from '../../assets/next.png';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: `“Partnering with Agilityhive Research was a genuinely positive experience
      . Their team's dedication to keeping communication open and adhering to agreed timelines
       made the entire project run smoothly and efficiently.”`,
      name: 'Project Manager, A leading MR company',
    },
    {
      id: 2,
      text: `“Agilityhive Research helps us quickly find the right experts. 
      Their extensive network ensures that we engage with the right professionals 
      every time.”`,
      name: 'Project Director, Consulting Firm',
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent(i => (i + 1) % testimonials.length);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-into-view for left panel
  const leftRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (leftRef.current) obs.observe(leftRef.current);
    return () => obs.disconnect();
  }, []);

  const { text, name } = testimonials[current];

  return (
    <section className="testimonial-section">
      <div
        ref={leftRef}
        className={`testimonial-left${inView ? ' in-view' : ''}`}
      >
        <span className="testimonial-tag">What our client Say</span>
        <h2 className="testimonial-title">
          Trust Built on<br />
          Millions of <br /> Experiences
        </h2>
      </div>

      <div className="testimonial-right">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <span className="testimonial-name">{name}</span>
        </div>
        <div className="testimonial-controls">
          <button className="arrow-btn" onClick={prev} aria-label="Prev">
            <img src={arrowLeft} alt="Prev" />
          </button>
          <button className="arrow-btn" onClick={next} aria-label="Next">
            <img src={arrowRight} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
}
