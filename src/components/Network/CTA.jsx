import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Network/CTA.css";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta__inner">
        <p className="cta__text">Ready to get started?</p>

        <button
          type="button"
          className="cta__btn"
          onClick={() => navigate("/contact")}
          aria-label="Go to Contact page"
        >
          Contact with us now
        </button>
      </div>
    </section>
  );
}
