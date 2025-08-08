import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Career/About.css';

export default function About() {
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }  // fire as soon as any part is visible
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-content">
        <div
          ref={contentRef}
          className={`about-text fade-up-on-scroll${visible ? ' show' : ''}`}
        >
          <p>
          At Agilityhive Research, we are committed to fostering a workplace where 
          innovation thrives and talented professionals are constantly welcomed onto our team.
           Our mission is to empower organizations by seamlessly connecting them with industry-leading 
           expertise, helping them overcome challenges and accelerate their progress.

          </p>
          <p>
        We provide our intellectually curious employees with cutting-edge resources and 
        robust training programs, ensuring that every question sparks meaningful insight. 
        Professional development is integral to our culture, with mentorship, workshops, and 
        ongoing support available at each stage of your career.
      </p>
      <p>
       Collaboration is at the heart of what we do. Our open and inclusive atmosphere
        encourages everyone to share ideas freely, challenge conventional thinking, and
         pursue their individual interests. At Agilityhive Research, each team member’s unique 
         background and perspective are valued, creating a dynamic environment where collective
          achievement is powered by personal growth and a shared purpose.
      </p>
       <p>
       If you’re ready to unleash your curiosity, make a real impact, and grow alongside
        passionate peers, explore the exciting opportunities waiting for you at Agilityhive Research.
      </p>
        </div>
      </div>
    </section>
  );
}
