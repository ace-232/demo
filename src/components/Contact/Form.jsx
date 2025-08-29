// src/components/Contact/Form.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Contact/Form.css";

export default function Form() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (formRef.current.checkValidity()) {
      // TODO: send data
      console.log("✅ Valid! Submitting…");
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <section className="contact-us" ref={sectionRef}>
      {/* Top title */}
      <h1 className={`contact-heroTitle ${inView ? "reveal" : ""}`}>
        Let’s take the first step toward your success together
      </h1>

      {/* Two-column layout */}
      <div className="contact-grid">
        {/* LEFT – intro copy */}
        <aside className="contact-left">
          <p className={`contact-desc ${inView ? "slide-in-right" : ""}`}>
            Need assistance or curious about our offerings? We’re here for you.
            From expert advice to tailored services, we’re eager to help you
            achieve your objectives.
          </p>
          <p className={`contact-desc ${inView ? "slide-in-right" : ""}`}>
            Simply complete the form below with your name, email, and inquiry,
            and our team will respond soon.
          </p>
        </aside>

        {/* RIGHT – form (unchanged fields & validation) */}
        <form
          ref={formRef}
          className={`contact-form ${inView ? "fade-in" : ""}`}
          noValidate
          onSubmit={handleSubmit}
        >
          {/* === Personal Information === */}
          <h3 className="section-heading">Personal Information</h3>

          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="asterisk">*</span>
            </label>
            <input id="firstName" name="firstName" type="text" required />
            {submitted && !formRef.current.firstName.value && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="asterisk">*</span>
            </label>
            <input id="lastName" name="lastName" type="text" required />
            {submitted && !formRef.current.lastName.value && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          {/* === Contact Information === */}
          <h3 className="section-heading">Contact Information</h3>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="asterisk">*</span>
            </label>
            <input id="email" name="email" type="email" required />
            {submitted && !formRef.current.email.validity.valid && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="asterisk">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required />
            {submitted && !formRef.current.phone.value && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="state">State/Province</label>
            <input id="state" name="state" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="zip">Zip/Postal Code</label>
            <input id="zip" name="zip" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="country">
              Country <span className="asterisk">*</span>
            </label>
            <select id="country" name="country" required>
              <option value="">Select One</option>
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
            </select>
            {submitted && !formRef.current.country.value && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          {/* === Message === */}
          <h3 className="section-heading">Message</h3>

          <div className="form-group">
            <label htmlFor="message">
              Questions / Comments <span className="asterisk">*</span>
            </label>
            <textarea id="message" name="message" rows="4" required />
            {submitted && !formRef.current.message.value && (
              <small className="error-message">This field is required.</small>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
