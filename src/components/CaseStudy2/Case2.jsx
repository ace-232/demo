import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CaseStudy/Case1.css";
import case1Img from "../../assets/energy.jpg";

export default function CaseStudy() {
  const [mainAnim,    setMainAnim]    = useState(false);
  const [textAnim,    setTextAnim]    = useState(false);
  const [imageAnim,   setImageAnim]   = useState(false);
  const sectionRef                     = useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMainAnim(true);                    // 1) animate main title
          setTimeout(() => setTextAnim(true),  50); // 2) subheading
          setTimeout(() => setImageAnim(true), 50); // 3) image
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="case-study-section" ref={sectionRef}>
      <h1 className={`case-study-main-title ${mainAnim ? "slide-in-left" : ""}`}>
        Case Study 2
      </h1>

      <div className="case-study-header">
        <div className={`case-study-text ${textAnim ? "slide-in-left" : ""}`}>
          <h2>
            Insights on Global Energy and Mining Technology Market
          </h2>
        </div>
        <div className={`case-study-image ${imageAnim ? "slide-in-right" : ""}`}>
          <img src={case1Img} alt="Cheese Market" />
        </div>
      </div>

      <div className={`case-study-body ${imageAnim ? "slide-in-right" : ""}`}>

  <h2>The Objective of the Study</h2>
  <p>
    A prominent global research and advisory firm sought Agilityhive Research’s expertise to provide in‑depth insights into the energy sector across the Asia‑Pacific region.
  </p>

  <h3>Key Discussion Points</h3>
  <ul>
    <li><strong>Simulation and Technology Tools:</strong> Preference and usage of simulation and technology tools in drilling and blasting activities</li>
    <li><strong>Drilling and Blasting Practices:</strong> Practices employed in mining, quarrying, road, and urban construction projects</li>
    <li><strong>Key Players:</strong> Major companies and organizations involved in the industry</li>
  </ul>

  <h3>Approach/Methodology &amp; Key Screening Points</h3>
  <p>
    Our research team employed a multi‑phased approach to gather insights and achieve project objectives:
  </p>
  <ul>
    <li><strong>Expert Identification:</strong> We conducted a rigorous search using internal databases and external resources (LinkedIn, ZoomInfo, D&amp;B Hoovers) to identify industry executives with relevant expertise.</li>
    <li><strong>Screening and Candidate Selection:</strong> We implemented a thorough phone screening process to evaluate potential candidates based on pre‑defined criteria. Detailed candidate profiles with responses to pre‑determined questions were subsequently provided to the client.</li>
  </ul>

  <h4>Key Screening Points</h4>
  <ul>
    <li>Researchers selected relevant senior experts based on their experience in the consumable fuels space</li>
    <li>Knowledge of upstream and downstream dynamics, simulation and technology tool usage, and key players in the industry</li>
  </ul>

  <h3>Agilityhive Research Solution</h3>
  <p>
    Agilityhive Research team efficiently identified, categorized, and coordinated interviews with 10 industry experts across the Asia‑Pacific region.
  </p>
  <ul>
    <li>Experts were screened using a two‑step validation process.</li>
    <li>Experts were mapped and shortlisted based on their expertise and alignment with project scope, utilizing our proprietary database and external sources.</li>
    <li>All shortlisted expert profiles were validated through phone screening.</li>
  </ul>
  <p>
    Our team successfully scheduled and conducted qualitative discussions within the specified timeframe, ensuring 100% quality. Daily updates were provided to the client, including progress reports, interview outcomes, qualifying question responses, and final discussion transcripts.
  </p>
  <div className="next-case-btn-wrapper">
        <button
          className="next-case-btn"
          onClick={() => navigate("/case-study")} // change to your actual route
        >
        ←  Previous Case Study
        </button>
      </div>
      </div>
    </section>
  );
}
