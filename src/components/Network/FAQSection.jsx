import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/Network/FAQSection.css";

const faqs = [
  {
    q: "Are you facing a specific problem?",
    a: "Leaders need insights and knowledge to make better choices and execute effectively",
  },
  {
    q: "Our Expert Network Access",
    a: "Our platform is home to former C-suite executives, managers, policy experts, and leading thinkers from across the globe.",
  },
  {
    q: "Gain Insights",
    a: "We bring together leading experts to discuss, gain insights and make informed choices",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // slide‐in when scrolled into view
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
    <section className="faq-section" ref={ref}>
      <h2 className={`faq-heading ${inView ? "slide-in-left" : ""}`}>
       How the process works
      </h2>
      <p className={`faq-subheading ${inView ? "slide-in-right" : ""}`}>
       
By aligning best expert with our clients’ strategic objectives, we accelerate
 business growth through the optimal combination of industry knowledge, experience,
  and cultural fit.
      </p>

      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <span className="icon">
                  {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
                </span>
              </button>
              {isOpen && <div className="faq-answer">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
