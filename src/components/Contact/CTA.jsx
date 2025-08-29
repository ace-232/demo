import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CaseStudy/CTA.css";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="CTA">
      <div className="CTA__inner">
        <h2 className="CTA__text">Get In Touch With An Expert</h2>
      </div>
    </section>
  );
}
