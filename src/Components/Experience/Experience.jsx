// Updated Experience.jsx
import React from "react";
import "./Experience.css";
import Header from "../Header/Header";

const experiences = [
  {
    title: (
      <span>
        Backend Developer at{" "}
        <a
          href="https://neoshealthtech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neos HealthTech
        </a>
      </span>
    ),
    duration: "Remote | Aug 2022 - Nov 2024",
    details: [
      "Contributed to the development of Flow, a cloud-based application designed to provide radiologists with essential tools and AI assistance, streamlining workflows and improving diagnostic accuracy.",
      "Designed and implemented microservices using Node.js, TypeScript, and MongoDB, ensuring scalability and performance.",
      "Reduced codebase complexity by refactoring into modular, reusable components using OOP principles.",
      "Implemented WebSocket protocol to enable real-time tracking of user status, improving system responsiveness.",
      "Significantly improved inter-service communication by migrating from REST to RabbitMQ.",
      "Developed an AI-powered bot to automate medical report generation, streamlining diagnostics.",
      "Customized the OHIF DICOM Viewer to meet specific product requirements.",
      "Gained expertise in radiology workflows, DICOM, and on-premise deployment with Nginx.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Work Experience"
        details="Explore a variety of roles and responsibilities I've undertaken."
      />
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3
              className="experience-title"
              title={typeof exp.title === "string" ? exp.title : ""}
            >
              {exp.title}
            </h3>
            <p className="experience-duration">{exp.duration}</p>
            <ul className="experience-details">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="experience-detail">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
