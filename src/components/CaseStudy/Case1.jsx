import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "../../styles/CaseStudy/Case1.css";

// right-side image (replace path with your asset)
import rightImg from "../../assets/Cheese.jpg";

export default function StudyOverview() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="study" ref={ref}>
      {/* Heading centered, slide in from left */}
      <h1 className={`study__heading slide-left ${show ? "show" : ""}`}>
        Assessment of the North American & European Mexico Cheese Market
      </h1>

      {/* 2-column layout */}
      <div className="study__grid">
        {/* LEFT: Objective + Key Discussion Points */}
        <div className={`study__left slide-up ${show ? "show" : ""}`}>
          <div className="study__block">
            <h2 className="study__h2">The Objective of the Study</h2>
            <p className="study__p">
             Our client, a leading global consulting firm,
              sought to conduct a comprehensive analysis of the cheese market in the geography.
            </p>
          </div>

          <div className="study__block">
            <h2 className="study__h2">Key Discussion Points</h2>
            <ul className="study__list">
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Market Drivers and Consumer Trends:</strong> Explore the factors influencing cheese demand, including evolving dietary preferences.</span>
              </li>
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Pricing and Category Analysis:</strong> Analyze key cheese categories and pricing structures across North America and Mexico.</span>
              </li>
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Competitive Landscape:</strong> Gain insights into the current competitive environment within the cheese market.</span>
              </li>
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Market Trends:</strong> Identify key trends that are positively impacting the cheese market.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: image */}
        <aside className={`study__right slide-up ${show ? "show" : ""}`}>
          <img src={rightImg} alt="Study illustration" className="study__img" />
        </aside>
      </div>

      {/* Methodology — normal list (NOT purple) */}
      <div className={`study__block slide-up ${show ? "show" : ""}`}>
        <h2 className="study__h2">Approach/Methodology &amp; Key Information Covered</h2>
        <p className="study__p">
          Our research team employed a multi-phased approach to gather insights and achieve project objectives:
        </p>
        <ul className="study__list">
          <li className="study__li">
            <span className="tick"><FaCheck /></span>
            <span>
              <strong>Expert Identification:</strong> Rigorous search using internal databases and
              external resources (LinkedIn, ZoomInfo, D&amp;B Hoovers) to identify executives with relevant expertise.
            </span>
          </li>
          <li className="study__li">
            <span className="tick"><FaCheck /></span>
            <span>
              <strong>Screening & Candidate Selection:</strong> Thorough phone screening based on pre-defined criteria.
              Delivered detailed candidate profiles with responses to pre-determined questions for client review.
            </span>
          </li>
        </ul>
      </div>

      {/* Agilityhive Research Solution — PURPLE box with points */}
      <div className={`study__panel slide-up ${show ? "show" : ""}`}>
        <h3 className="study__panelTitle">Agilityhive Research Solution</h3>
         <p className="solution__p">
          Leveraging our proprietary database, online panels, specialized recruitment methods, 
          and external resources (LinkedIn, ZoomInfo, D&B), Agilityhive’s research team efficiently 
          identified, categorized, and coordinated interviews with 30 industry experts across North 
          America and Mexico. This approach enabled us to:
        </p>
        <ul className="study__list study__list--panel">
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>
              Leveraged proprietary database, online panels, specialized recruitment, and external sources
              (LinkedIn, ZoomInfo, D&amp;B) to identify, categorize, and coordinate interviews with
              30 industry experts across North America and Mexico.
            </span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>Captured emerging trends and market patterns within the cheese market in both regions.</span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>Analyzed competitive landscape and key drivers impacting cheese markets.</span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>Delivered in-depth insights on pricing, categories, and consumer trends.</span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>Achieved all project goals within the designated timeframe.</span>
          </li>
        </ul>
         <p className="solution__p">
          Our team’s dedication ensured all project goals were achieved within the designated timeframe.
        </p>
      </div>
      <div className="next-case-btn-wrapper">
        <button
          className="next-case-btn"
          onClick={() => navigate("/case-study-2")} // change to your actual route
        >
          Next Case Study →
        </button>
      </div>
    </section>
  );
}
