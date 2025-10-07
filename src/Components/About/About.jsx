import React, { useState } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import "./About.css";

function About() {
  let [edu, setEdu] = useState(false);
  let [exp, setExp] = useState(true);
  let opentab = (i) => {
    if (i === "Education") {
      setEdu(true);
      setExp(false);
    }
    if (i === "Experience") {
      setEdu(false);
      setExp(true);
    }
  };
  return (
    <div className="flexContainer">
      <div className="MinAndMAxDimention about_container">
        <div className="about-heading">ABOUT</div>
        <p className="about-info">
          Adaptable and self-motivated Frontend Developer with over 2 years of experience building
          scalable, high-performance web applications. Strong expertise in React.js and Next.js with
          additional experience in Redux, TypeScript, Sass, Tailwind CSS, and modern front-end
          tools. Proven track record of problem-solving, collaboration, and delivering efficient,
          user-focused solutions.
        </p>

        <div className="tab-titles">
          <p
            className={`tab-links ${exp ? "active-link" : ""}`}
            onClick={() => {
              opentab("Experience");
            }}
          >
            Experience
          </p>

          <p
            className={`tab-links ${edu ? "active-link" : ""}`}
            onClick={() => {
              opentab("Education");
            }}
          >
            Education
          </p>
        </div>

        <div className={`tab-contents  ${edu ? "active-tab" : ""}`} id="Education">
          <Education />
        </div>

        <div className={`tab-contents  ${exp ? "active-tab" : ""}`} id="Experience">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default About;
