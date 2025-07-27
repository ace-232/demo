// src/components/Career/ContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import "../../styles/Contact/Form.css";

export default function ContactSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-content">
        <div className={`contact-info ${inView ? 'slide-in-left' : ''}`}>
          <h2>Get in Touch</h2>
          <p>
            For inquiries or feedback,<br />
            please fill out the form below and<br />
            our team will get back to you shortly.
          </p>
        </div>

        <form className={`contact-form ${inView ? 'slide-in-right' : ''}`}>
          <div className="form-row">
            <label>
              Name*
              <input type="text" name="name" required />
            </label>
            <label>
              Email*
              <input type="email" name="email" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Phone*
              <input type="tel" name="phone" required />
            </label>
          </div>

          <label>
            How can our team help you?
            <textarea name="message" rows="3" />
          </label>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
