import React from "react";
import cartoon from "../../images/programmer-cartoon1-final.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./Home.css";

function Home() {
  return (
    <div className="flexContainer">
    <div className="boxintro MinAndMAxDimention" id="home">
      <div className="leftContainer">
        <div className="introname">
          Hi, I'm <span id="mani">Manivasagam</span>
        </div>
        <div className="animate-character">FULL STACK DEVELOPER</div>
        <div className="iconContainer">
          <div className="iconContainerSocial">
            <div className="homeicons">
              <a
                href="https://github.com/ManivasagamSuresh"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub  className="homeGithubIcon"/>
              </a>
            </div>
            <div className="homeicons">
              <a
                href="https://www.linkedin.com/in/manivasagam-s-3534bb157/"
                style={{ color: "#0077b5" }}
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin  className="homeLinkedIcon"/>
              </a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1UUfH1_YV9q1nE7XgFMGCHBItn6SvyfRd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resumedownloadLink"
          >
            <button className="" id="resumedownload">
              Check out My Resume <BsArrowRight size={"1.5em"} className=""/>
            </button>
          </a>
        </div>
      </div>
      <div id="image1">
        <img src={cartoon} alt="" className="HomeMeditateImage" />
      </div>
    </div>
    </div>
  );
}

export default Home;
