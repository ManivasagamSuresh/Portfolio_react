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
    <div id="about">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-4 ">ABOUT</h1>
          <p className="about-info ">
            A self-motivated, adaptable individual with a passion for continuous
            learning. Experienced in delivering exceptional client service and
            adapting to change. Seeking an opportunity to utilize and expand
            technical expertise in full-stack development.
          </p>

          <div className="about col-lg-12">
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
          </div>

          <div
            className={`col-lg-12 tab-contents  ${edu ? "active-tab" : ""}`}
            id="Education"
          >
            <Education />
          </div>

          <div
            className={`col-lg-12 tab-contents  ${exp ? "active-tab" : ""}`}
            id="Experience"
          >
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
