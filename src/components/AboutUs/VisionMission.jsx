import React, { useEffect, useRef, useState } from "react";
import "../../styles/AboutUs/VisionMission.css";

export default function VisionMission() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="vm" ref={ref}>
      <div className={`vm__grid ${show ? "show" : ""}`}>
        <div className="vm__block vm__block--vision">
          <h2 className="vm__title">Vision</h2>
          <p className="vm__text">
            To foster enduring partnerships built on mutual respect, trust, and
            integrity, delivering exceptional services that empower our clients
            to achieve lasting success.
          </p>
        </div>

        <div className="vm__block vm__block--mission">
          <h2 className="vm__title">Mission</h2>
          <p className="vm__text">
            To be a premier management consultancy, delivering innovative
            solutions and strategic guidance to drive sustainable success for
            our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
