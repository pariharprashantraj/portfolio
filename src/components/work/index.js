import React from "react";
import "./style.css";

const experiences = [
  {
    company: "Accolite Digital (Client: Flipkart)",
    role: "Senior Software Engineer",
    duration: "Sep 2021 – Present",
    description: [
      "Architected and migrated legacy applications to React and Next.js.",
      "Enhanced Flipkart’s Seller Portal, improving usability and conversion rates.",
      "Optimized frontend performance, improving Lighthouse scores by 40%.",
    ],
  },
  {
    company: "EasyEat",
    role: "Software Engineer",
    duration: "Mar 2021 – Sep 2021",
    description: [
      "Migrated application from PHP to React, improving speed by 50%.",
      "Optimized UI/UX workflows, enhancing the FoodCourt module.",
      "Fixed high-priority production bugs and improved accessibility.",
    ],
  },
  {
    company: "Philips Innovation Campus",
    role: "Software Engineer",
    duration: "Jun 2016 – Jan 2018",
    description: [
      "Enhanced medical imaging features like DICOM6000 and Reference Lines.",
      "Optimized rendering performance and cross-browser compatibility.",
      "Maintained high code quality through testing and performance analysis.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="notes-heading">Work Experience</div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            {/* Circle with Tick */}
            <div className="timeline-marker">✔</div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <p>
                <em>{exp.duration}</em>
              </p>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
