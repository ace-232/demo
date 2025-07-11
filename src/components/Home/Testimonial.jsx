import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Home/Testimonial.css';

import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import arrowLeft from '../../assets/back.png';
import arrowRight from '../../assets/next.png';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: `“Thanks to the deep consumer insights and trend analyses delivered by the team, 
      we were able to pivot our product offering and increase our first-quarter revenue by 28%.
       Their qualitative interviews and data dashboards were a game-changer.”`,
      name: 'Madonna Raul',
      img: avatar1,
    },
    {
      id: 2,
      text: `“The custom market segmentation study gave us clarity on which new regions to expand into. 
      Their rigorous survey design and real-time reporting meant we launched confidently—and saw a 35%
       uplift in engagement within weeks.”`,
      name: 'Alexander Smith',
      img: avatar2,
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

  const { text, name, img } = testimonials[current];

  return (
    <section className="testimonial-section">
      <div
        ref={leftRef}
        className={`testimonial-left${inView ? ' in-view' : ''}`}
      >
        <span className="testimonial-tag">Testimonials</span>
        <h2 className="testimonial-title">
          Trust Built on<br />
          Millions of <br /> Experiences
        </h2>
      </div>

      <div className="testimonial-right">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <img src={img} alt={name} className="testimonial-img" />
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
