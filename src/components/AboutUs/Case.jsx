import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/AboutUs/Case.css";

import cheeseImg from "../../assets/cheese.jpg";
import energyImg from "../../assets/energy.jpg";

const slides = [
  { imgSrc: cheeseImg, title: "Assessment of the North American and European Mexico Cheese Market" },
  { imgSrc: energyImg, title: "Insights on Global Energy and Mining Technology Market" },
];

export default function Case() {
  const [current,    setCurrent]   = useState(0);
  const [headAnim,  setHeadAnim]  = useState(false);
  const [paraAnim,  setParaAnim]  = useState(false);
  const [boxAnim,   setBoxAnim]   = useState(false);
  const timeoutRef                  = useRef(null);
  const sectionRef                  = useRef(null);

  // auto‑advance slides
  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrent(c => (c + 1) % slides.length),
      5000
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // scroll‑triggered animation sequence
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadAnim(true);                  // 1) heading
          setTimeout(() => setParaAnim(true), 400);  // 2) paragraph
          setTimeout(() => setBoxAnim(true),  800);  // 3) box wrapper
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const prev = () => {
    clearTimeout(timeoutRef.current);
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  };
  const next = () => {
    clearTimeout(timeoutRef.current);
    setCurrent(c => (c + 1) % slides.length);
  };

  return (
    <section ref={sectionRef} className="carousel-section">
      <h2 className={`carousel-heading ${headAnim ? "slide-in-right" : ""}`}>
        OUR WORKS
      </h2>
      <p className={`carousel-para ${paraAnim ? "slide-in-left" : ""}`}>
        Here are a few highlights from our latest Case Studies.
      </p>

      <div className="carousel">
        <button className="nav arrow prev" onClick={prev}>←</button>

        <div className={`slide-wrapper ${boxAnim ? "slide-in-right" : ""}`}>
          <div className="slide-container">
            {slides.map((slide, i) => (
              <div key={i} className={`slide ${i === current ? "active" : ""}`}>
                <img src={slide.imgSrc} alt={slide.title} />
              </div>
            ))}
          </div>
          <div className="slide-title">{slides[current].title}</div>
        </div>

        <button className="nav arrow next" onClick={next}>→</button>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => {
              clearTimeout(timeoutRef.current);
              setCurrent(i);
            }}
          />
        ))}
      </div>

      <div className="read-more-container">
       <Link to="/case-study" className="read-more-btn">
         Read More
       </Link>
     </div>
    </section>
  );
}
