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
    <div  className="flexContainer">
      <div className="MinAndMAxDimention about_container">
          <div className="about-heading">ABOUT</div>
          <p className="about-info">
            A self-motivated, adaptable developer with a passion for continuous
            learning. Experienced in delivering exceptional client service and
            adapting to change. Seeking an opportunity to utilize and expand
            technical expertise in full-stack development.
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

          <div
            className={`tab-contents  ${edu ? "active-tab" : ""}`}
            id="Education"
          >
            <Education />
          </div>

          <div
            className={`tab-contents  ${exp ? "active-tab" : ""}`}
            id="Experience"
          >
            <Experience />
          </div>
      
      </div>
    </div>
  );
}

export default About;
