import React, { useEffect, useRef, useState } from "react";
import {
  FaBalanceScale,
  FaUsers,
  FaBrain,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";
import "../../styles/WhatWeDo/Value.css";

const values = [
  { key: "di",   icon: <FaUsers />,     label: "Diversity"  },
  { key: "cr",   icon: <FaLightbulb />,     label: "Creativity"   },
  { key: "em",   icon: <FaHandsHelping />,   label: "Empathy" },
  { key: "in",   icon: <FaBrain />,          label: "Learning" },
  { key: "le",   icon: <FaBalanceScale />, label: "Integrity" },
];

export default function Value() {
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
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`value-section ${inView ? "in-view" : ""}`}
    >
       <div className="value-header">
    <h2 className={`value-heading ${inView ? "slide-up" : ""}`}>
      Our Core Values
    </h2>
    <p className={`value-intro ${inView ? "slide-in-left" : ""}`}>
      Leveraging our experienced team and robust proprietary panels, we deliver exceptional 
      value through a comprehensive range of market research services. Our core values underpin our
      commitment to delivering exceptional service.
    </p>
  </div>
      <div className="value-spiral">
        {/* map your five items */}
        {[
          { icon: <FaUsers />,     label: "Diversity"  },
          { icon: <FaLightbulb />,     label: "Creativity"   },
          { icon: <FaHandsHelping />, label: "Empathy"  },
          { icon: <FaBrain />,     label: "Learning"   },
          { icon: <FaBalanceScale />, label: "Integrity" }
        ].map((item, i) => (
          <div key={i} className="circle-wrapper">
            <div className="circle">{item.icon}</div>
            <span className="circle-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
