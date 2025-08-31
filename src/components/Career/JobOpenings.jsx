// src/components/Career/JobOpenings.jsx
import React, { useState } from "react";
import "../../styles/Career/JobOpenings.css";

const jobs = [
  {
    title: "Market Research Associate",
    type: "Full Time",
    location: "Noida",
    description: `Reports To: Team Leader

Educational Requirement: Graduation or Postgraduation in any discipline 

Experience Level: Open to recent graduates and individuals with up to one year of professional experience

Role Summary-
As a Research Associate, the primary responsibility is to efficiently connect clients with Subject Matter Experts (SMEs) who possess substantial hands-on expertise, ensuring timely and high-quality matches that align closely with specific client needs.

Key Responsibilities-
Project delivery: Based on the target topic or industry that our clients are evaluating, perform high-quality research to understand the client's needs and vet the relevance and qualifications of experts recommended by our expert recommendation system or external databases

Expert recruitment and management: Conduct in-depth and informed conversations with experts who are often mid-senior level executives at top-tier firms, assess their expertise, and vet their suitability for projects by learning about their professional background and knowledge of industry developments and trends. Explain and negotiate the terms of engagement and compensation offered.`,
  },
  {
    title: "Team Leader",
    type: "Full Time",
    location: "Noida",
    description: `Reports To: Research Manager

Educational Requirement: Graduate or Postgraduate degree in any discipline

Experience Level: 2 to 3 years of relevant experience

Role Summary-
The Team Leader is primarily responsible for managing projects and maintaining strong client relationships.

Key Responsibilities-
Project Delivery:
Conduct thorough research on the industry or topic that clients are focusing on. Understand the clients’ requirements clearly and evaluate the suitability and expertise of professionals suggested by our expert recommendation system or found in external databases.

Expert Recruitment and Management:
Engage in detailed and knowledgeable discussions with mid to senior-level executives from leading organizations. Assess their qualifications and industry knowledge to determine their fit for various projects. Clearly communicate and negotiate terms of collaboration and payment.

Client Servicing:
Build and maintain strong relationships with clients by delivering high-quality work and providing proactive updates on project progress. Seek timely feedback to improve service and ensure continuous engagement through regular communication`,
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
