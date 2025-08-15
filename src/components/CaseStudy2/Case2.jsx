import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "../../styles/CaseStudy/Case1.css";

// right-side image (replace path with your asset)
import rightImg from "../../assets/energy.jpg";

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
       Insights on Global Energy and Mining Technology Market
      </h1>

      {/* 2-column layout */}
      <div className="study__grid">
        {/* LEFT: Objective + Key Discussion Points */}
        <div className={`study__left slide-up ${show ? "show" : ""}`}>
          <div className="study__block">
            <h2 className="study__h2">The Objective of the Study</h2>
            <p className="study__p">
             A prominent global research and advisory firm sought Agilityhive Research’s expertise 
             to provide in‑depth insights into the energy sector across the Asia‑Pacific region.
            </p>
          </div>

          <div className="study__block">
            <h2 className="study__h2">Key Discussion Points</h2>
            <ul className="study__list">
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Simulation and Technology Tools: </strong>  Preference and usage of simulation and technology tools in drilling and blasting activities</span>
              </li>
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Drilling and Blasting Practices:</strong> Practices employed in mining, quarrying, road, and urban construction projects</span>
              </li>
              <li className="study__li">
                <span className="tick"><FaCheck /></span>
                <span><strong>Key Players:</strong> Major companies and organizations involved in the industry</span>
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
              <strong>Expert Identification: </strong> We conducted a rigorous search using internal databases 
              and external resources (LinkedIn, ZoomInfo, D&B Hoovers) to identify industry executives 
              with relevant expertise.
            </span>
          </li>
          <li className="study__li">
            <span className="tick"><FaCheck /></span>
            <span>
              <strong>Screening & Candidate Selection:</strong> We implemented a thorough phone screening
               process to evaluate potential candidates based on pre‑defined criteria. Detailed candidate 
               profiles with responses to pre‑determined questions were subsequently provided to the client.
            </span>
          </li>
        </ul>
      </div>

{/* key screening points */}
<div className={`study__block slide-up ${show ? "show" : ""}`}>
        <h2 className="study__h2">Key Screening Points</h2>
        
        <ul className="study__list">
          <li className="study__li">
            <span className="tick"><FaCheck /></span>
            <span>
              Researchers selected relevant senior experts based on their experience in the consumable fuels space
            </span>
          </li>
          <li className="study__li">
            <span className="tick"><FaCheck /></span>
            <span>
              Knowledge of upstream and downstream dynamics, simulation and technology tool usage, and key players in the industry
            </span>
          </li>
        </ul>
      </div>

      {/* Agilityhive Research Solution — PURPLE box with points */}
      <div className={`study__panel slide-up ${show ? "show" : ""}`}>
        <h3 className="study__panelTitle">Agilityhive Research Solution</h3>
         <p className="solution__p">
         Agilityhive Research team efficiently identified, categorized, and coordinated interviews
          with 10 industry experts across the Asia‑Pacific region.
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
            <span>Experts were screened using a two‑step validation process.</span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>Experts were mapped and shortlisted based on their expertise and alignment with project scope, utilizing our proprietary 
              database and external sources.</span>
          </li>
          <li className="study__li">
            <span className="tick tick--panel"><FaCheck /></span>
            <span>All shortlisted expert profiles were validated through phone screening.</span>
          </li>
        </ul>
         <p className="solution__p">
         Our team successfully scheduled and conducted qualitative discussions within the
          specified timeframe, ensuring 100% quality. Daily updates were provided to the client,
           including progress reports, interview outcomes, qualifying question responses, and final 
           discussion transcripts.
        </p>
      </div>
       <div className="next-case-btn-wrapper">
        <button
          className="next-case-btn"
          onClick={() => navigate("/case-study")} // change to your actual route
        >
        ←  Previous Case Study
        </button>
      </div>
    </section>
  );
}
