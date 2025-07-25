import React, { useEffect, useRef, useState } from 'react';
import "../../styles/Career/ContactSection.css";

export default function ContactSection() {
  const sectionRef = useRef(null);
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
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <h2 className={`contact-heading ${inView ? 'slide-in-right' : ''}`}>
        Get in Touch
      </h2>

      <div className="contact-content">
        <div className={`contact-info ${inView ? 'slide-in-left' : ''}`}>
          <p className="contact-intro">Be a part of Agility Hive family</p>
          <p>
            <strong>Call:</strong>{' '}
            <a href="tel:+911244954129">+91 999-916-3345</a>
          </p>
          <p>
            or write us{' '}
            <a href="mailto:recruitment@agilityhive.com">
              connect@agilityhiveresearch.com
            </a>
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
            <label>
              Position
              <select name="position">
                <option value="">Select One</option>
                <option>Market Research Associate</option>
                <option>Senior Market Research Associate</option>
              </select>
            </label>
          </div>

          <label>
            Educational Qualification
            <textarea name="education" rows="3" />
          </label>

          <div className="form-row">
            <label>
              Years of Experience
              <input type="number" name="experience" min="0" />
            </label>
            <label>
              Resume
              <input type="file" name="resume" />
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
