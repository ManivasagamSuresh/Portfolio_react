import React from "react";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import js from "../../images/JS.svg";
import boot from "../../images/bootstrap.svg";
import rct from "../../images/react.svg";
import mongo from "../../images/mong.png";
import node from "../../images/node.jpg";
import post from "../../images/postman.png";
import sql from "../../images/sql.png";
import github from "../../images/github.png";
import redux from "../../images/reduxy-removebg-preview.png";
import firebase from "../../images/firebase-removebg-preview.png";
import JWT from "../../images/JWT.png";
import nxt from "../../images/nxt.png";
import tailwind from "../../images/tailwindcss.png";
import socket from "../../images/socketIO.png";
import typescriptIcon from '../../images/Typescript.png'
import sass from "../../images/Sass.png"

function Skillicons() {
  return (
    <div className="skills-Icon_Container">
      <h4 className="Tech">Technologies and Tools :</h4>
      <div className="skills-Icon_innerContainer" >
        <div className="skills_IconsRow" >
          <div className="gridicon AnimateFirstRowSectionOne">
            <img src={html} alt="" />
            <span>HTML</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionOne">
            <img src={js} alt="" id="jsicon" />
            <span>Java Script</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionTwo">
            <img src={typescriptIcon} alt="" id="cssicon" />
            <span>Type Script</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionTwo">
            <img src={css} alt="" id="bootstrapicon" />
            <span>CSS</span>
          </div>
        </div>

        <div className="skills_IconsRow">
          <div className=" gridicon AnimateFirstRowSectionThree">
            <img src={rct} alt="" />
            <span>React JS</span>
          </div>
          <div className=" gridicon AnimateFirstRowSectionThree">
            <img src={nxt} alt="" />
            <span>Next JS</span>
          </div>
          <div className=" gridicon AnimateFirstRowSectionFour" id="mongoDB" >
            <img src={node} alt="" />
            <span>Node JS</span>
          </div>

          <div className="gridicon AnimateFirstRowSectionFour">
            <img src={mongo} alt="" />
            <span>Mongo DB</span>
          </div>
        </div>

        <div className="skills_IconsRow">
          <div className=" gridicon AnimateFirstRowSectionFive">
            <img src={redux} alt="" />
            <span>Redux</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionFive">
            <img src={tailwind} alt="" />
            <span style={{ marginLeft: "10px" }}>Tailwind CSS</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionSix">
            <img src={boot} alt="" />
            <span>Bootstrap</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionSix">
            <img src={sass} alt="" />
            <span>SASS</span>
          </div>
        </div>

        <div className="skills_IconsRow">
          <div className=" gridicon AnimateFirstRowSectionSeven">
            <img src={post} alt="" />
            <span>Postman</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionSeven">
            <img src={github} alt="" />
            <span>Github</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionEight">
            <img src={sql} alt="" />
            <span>SQL</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionEight">
            <img src={firebase} alt="" />
            <span>Firebase</span>
          </div>
        </div>

        <div className="skills_IconsRow">
          <div className=" gridicon AnimateFirstRowSectionNine">
            <img src={socket} alt="" />
            <span>Socket IO</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionNine">
            <img src={JWT} alt="" />
            <span>Json Web Token</span>
          </div>
          {/* <div className="gridicon AnimateFirstRowSectionTen">
            <img src={sql} alt="" />
            <span>SQL</span>
          </div>
          <div className="gridicon AnimateFirstRowSectionTen">
            <img src={socket} alt="" />
            <span>Socket IO</span>
          </div> */}
        </div>

      </div>
    </div>
  );
}

export default Skillicons;
