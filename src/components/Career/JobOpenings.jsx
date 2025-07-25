// src/components/Career/JobOpenings.jsx
import React, { useState } from "react";
import "../../styles/Career/JobOpenings.css";

const jobs = [
  {
    title: "Market Research Associate",
    type: "Full Time",
    location: "Noida",
    description: `As a Market Research Associate you will:
- Design and field surveys across B2B and B2C segments  
- Analyze quantitative data (Excel/SPSS) and draft slide decks  
- Conduct desk research and competitive benchmarking  
- Present findings to senior stakeholders on a bi‑weekly basis`,
  },
  {
    title: "Senior Market Research Associate",
    type: "Full Time",
    location: "Noida",
    description: `As a Senior Market Research Associate you will:
- Lead project scoping, questionnaire design & sampling plans  
- Mentor junior analysts & review their deliverables  
- Drive advanced statistical analysis (regression, conjoint)  
- Own client presentations and ensure 100% on‐time delivery`,
  },
];

export default function JobOpenings() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);


  return (
    <section className="jobs-section">
      <h2 className="jobs-heading">Join Us At Agilityhive Today</h2>
      <div className="jobs-table">
        {jobs.map((job, i) => (
          <React.Fragment key={job.title}>
            <div className="job-row">
              <div className="job-cell job-title">{job.title}</div>
              <div className="job-cell job-type">{job.type}</div>
              <div className="job-cell job-location">{job.location}</div>
              <div className="job-cell job-action">
                <button
                  className="know-more-btn"
                  onClick={() => toggle(i)}
                >
                  Know More
                </button>
              </div>
            </div>
            {openIndex === i && (
              <div className="job-desc-row">
                <div className="job-desc-cell" colSpan={4}>
                  <p>{job.description}</p>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
