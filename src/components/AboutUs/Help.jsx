import React, { useEffect, useRef, useState } from "react";
import "../../styles/AboutUs/Help.css";
import helpImg from "../../assets/help.jpg"; // your illustration

// pick icons that fit each feature
import {
  FaBullseye,
  FaEye,
  FaChartLine,
  FaUserTie,
  FaBrain,
  FaLightbulb,
  FaShieldAlt,
  FaMedal,
} from "react-icons/fa";

const features = [
  { title: "Motivation",           icon: <FaBullseye /> },
  { title: "Vision",               icon: <FaEye /> },
  { title: "Strategy",             icon: <FaChartLine /> },
  { title: "Leadership",           icon: <FaUserTie /> },
  { title: "Self Improvement",     icon: <FaBrain /> },
  { title: "Self Awareness",       icon: <FaLightbulb /> },
  { title: "Confidence",           icon: <FaShieldAlt /> },
  { title: "Life Skills",          icon: <FaMedal /> },
];

export default function Help() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="help-section" ref={ref}>
      <h2 className={`help-heading ${inView ? "animate" : ""}`}>
        How We Help
      </h2>
      <p className={`help-desc ${inView ? "animate" : ""}`}>
         Our area of expertise lies in providing cutting-edge solutions to top academic institutions,
          corporations, and consulting firms in a variety of industries. Our team of professionals is
           committed to offering our clients intelligent, data-driven analysis so they can reach their
            strategic objectives and make well-informed decisions.
      </p>
      <div className="help-content">
        <div className={`help-image-container ${inView ? "animate" : ""}`}>
          <img src={helpImg} alt="collaborative work" />
        </div>
        <div className="help-features-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`help-feature-box ${inView ? "animate" : ""}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
