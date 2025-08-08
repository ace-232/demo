import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CaseStudy/Case1.css";
import case1Img from "../../assets/cheese.jpg";

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
        Case Study 1
      </h1>

      <div className="case-study-header">
        <div className={`case-study-text ${textAnim ? "slide-in-left" : ""}`}>
          <h2>
            Assessment of the North American &amp; European Mexico Cheese Market
          </h2>
        </div>
        <div className={`case-study-image ${imageAnim ? "slide-in-right" : ""}`}>
          <img src={case1Img} alt="Cheese Market" />
        </div>
      </div>

      <div className={'case-study-body ${imageAnim ? "slide-in-right" : ""}'}>
            <h2>The Objective of the Study</h2>
            <p>
              Our client, a leading global consulting firm, sought to conduct a comprehensive analysis of the cheese market in the geography.
            </p>

            <h3>Key Discussion Points</h3>
            <ul>
              <li><strong>Market Drivers and Consumer Trends:</strong> Explore the factors influencing cheese demand, including evolving dietary preferences.</li>
              <li><strong>Pricing and Category Analysis:</strong> Analyze key cheese categories and pricing structures across North America and Mexico.</li>
              <li><strong>Competitive Landscape:</strong> Gain insights into the current competitive environment within the cheese market.</li>
              <li><strong>Market Trends:</strong> Identify key trends that are positively impacting the cheese market.</li>
            </ul>

            <h3>Approach/Methodology &amp; Key Information Covered</h3>
            <p>
              Our research team employed a multi-phased approach to gather insights and achieve project objectives:
            </p>
            <ul>
              <li><strong>Expert Identification:</strong> We conducted a rigorous search using internal databases and external resources (LinkedIn, ZoomInfo, D&amp;B Hoovers) to identify industry executives with relevant expertise.</li>
              <li><strong>Screening and Candidate Selection:</strong> We implemented a thorough phone screening process to evaluate potential candidates based on pre-defined criteria. Detailed candidate profiles with responses to pre-determined questions were subsequently provided to the client.</li>
            </ul>

            <h3>Agilityhive Research Solution</h3>
            <p>
              Leveraging our proprietary database, online panels, specialized recruitment methods, and external resources (LinkedIn, ZoomInfo, D&amp;B), Agilityhive’s research team efficiently identified, categorized, and coordinated interviews with 30 industry experts across North America and Mexico. This approach enabled us to:
            </p>
            <ul>
              <li>Capture emerging trends and market patterns within the cheese market across both regions.</li>
              <li>Analyze the competitive landscape and key drivers impacting cheese markets.</li>
              <li>Deliver in-depth insights on pricing, categories, and consumer trends.</li>
            </ul>

            <p>
              Our team’s dedication ensured all project goals were achieved within the designated timeframe.
            </p>
           <div className="next-case-btn-wrapper">
        <button
          className="next-case-btn"
          onClick={() => navigate("/case-study-2")} // change to your actual route
        >
          Next Case Study →
        </button>
      </div>
      </div>
    </section>
  );
}
