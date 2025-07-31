import React, { useRef, useEffect, useState } from 'react';
import '../../styles/Lead/UseCases.css';

const useCases = [
  {
    title: 'Outbound Marketing',
    text:
      'Implement a targeted outbound outreach strategy that includes cold calling, cold emailing, and social media engagement.',
  },
  {
    title: 'Lead Qualification',
    text:
      'Optimize your sales team’s focus by qualifying leads based on their interest, needs, and readiness to purchase.',
  },
  {
    title: 'Appointment Setting',
    text:
      'Coordinate meetings between qualified leads and client’s sales representatives to foster productive discussions and drive conversions.',
  },
   {
    title: 'Reporting',
    text:
      'Deliver comprehensive reports on the effectiveness of your lead generation campaigns, utilizing data insights to refine strategies and maximize results.',
  },
];

export default function UseCases() {
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
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="usecases-section" ref={ref}>
      <h2 className={`usecases-heading ${inView ? 'visible' : ''}`}>
        SERVICES
      </h2>
      <div className={`usecases-cards ${inView ? 'visible' : ''}`}>
        {useCases.map((c, i) => (
          <div key={i} className="card">
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
