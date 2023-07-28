import React, { useState } from "react";
import html from "./images/html.svg";
import css from "./images/css.svg";
import js from "./images/JS.svg";
import boot from "./images/bootstrap.svg";
import rct from "./images/react.svg";
import mongo from "./images/mongodb.svg";
// import node from "./images/nodejs.svg";
import npm from "./images/npm.png";
import node from "./images/node.jpg";
import post from "./images/postman.png";
import sql from "./images/mysql.svg";
// import git from "./images/git.svg";
import github from "./images/github.png"
import redux from "./images/redux.svg"
import firebase from "./images/firebase.png"
import JWT from "./images/JWT1.png"

function About() {
  let [edu, setEdu] = useState(false);
  let [exp, setExp] = useState(true);
  let [Skill, setSkill] = useState(false);
  let opentab = (i) => {
    if (i == "Education") {
      setEdu(true);
      setExp(false);
      setSkill(false);
    }
    if (i == "Experience") {
      setEdu(false);
      setExp(true);
      setSkill(false);
    }
    if (i == "skills") {
      setEdu(false);
      setExp(false);
      setSkill(true);
    }
  };
  return (
    <div id="about">
      <div className="row">
      <div className="col-lg-12">
      <h1 className="display-4">ABOUT</h1>
      <p className="about-info ">
        I am a self-learner, curious and enthusiastic in learning new things.
        Seeking a perfect role to enhance my technical knowledge in
        full stack development.
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
            
            

            

            {/* <p
              className={`tab-links ${Skill ? "active-link" : ""}`}
              onClick={() => {
                opentab("skills");
              }}
            >
              Skills
            </p> */}
          </div>
        </div>
      

      <div className={`tab-contents  ${Skill ? "active-tab" : ""}`} id="skills">
        
          <div className="col-lg-12">
            <h4 className="Tech">Technologies and Tools :</h4>

            <div className="row">
              
              <div className="col-lg-3 gridicon1 ">
                <img src={html} alt="" style={{width:"80px"}}/>
                <span>HTML</span>
              </div>
              <div className="col-lg-3 gridicon1 ">
                <img src={js} alt="" id="jsicon" style={{width:"80px"}}/>
                <span>Java Script</span>
              </div>
              <div className="col-lg-3 gridicon1 ">
                <img src={css} alt="" id="cssicon" style={{width:"80px"}}/>
                <span>CSS</span>
              </div>
              <div className="col-lg-3 gridicon1 ">
                <img src={boot} alt="" id="bootstrapicon" style={{width:"80px"}}/>
                <span>BootStrap</span>
              </div>
            </div>
            <div className="gridicon2 row">
              <div className="col-lg-3">
                <img src={rct} alt="" style={{width:"80px"}}/>
                <span>React</span>
              </div>
              <div className="col-lg-3">
                <img src={node} alt="" style={{width:"80px"}}/>
                <span>Node Js</span>
              </div>
              <div className="col-lg-3" id="mongoDB">
                <img src={mongo} alt="" style={{width:"80px"}}/>
                <span>Mongo DB</span>
              </div>
              {/* <div className="col-lg-3">
                <img src={redux} alt="" />
                <span>Redux</span>
              </div> */}
              <div className="col-lg-3">
                <img src={redux} alt="" style={{width:"80px"}}/>
                <span>Redux</span>
              </div>
            </div>
            <div className="gridicon3 row">
              
              <div className="col-lg-3">
                <img src={post} alt="" style={{width:"80px"}}/>
                <span>Postman</span>
              </div>
              <div className="col-lg-3">
                <img src={JWT} alt="" style={{width:"100px"}}  />
                <span>JWT</span>
              </div>
              <div className="col-lg-3">
                <img src={github} alt="" style={{width:"80px"}}/>
                <span>GitHub</span>
              </div>
              <div className="col-lg-3">
                <img src={firebase} alt="" style={{width:"70px"}}/>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        
        <div className="row">
          <div className="col-lg-6 softskills">
            <h4>Professional Skills :</h4>
            <ul style={{ listStyleType: "disc" }}>
              <li>Time Management</li>
              <li>Program Management</li>
              <li>Adaptability</li>
              <li>Team Work</li>
            </ul>
          </div>

          <div className="col-lg-6 softskills">
            <h4>Languages Known :</h4>
            <ul style={{ listStyleType: "disc" }}>
              <li>English</li>
              <li>Tamil</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////// */}
      
        <div
          className={`col-lg-12 tab-contents  ${edu ? "active-tab" : ""}`}
          id="Education"
        >
          <ul>
            <li>
              <span>SSLC: 96.6%</span>
              <br />
              AKNU S.Sundar Matric Hr.sec School, Madurai.
            </li>
            <li>
              <span>HSC: 93.5%</span>
              <br />
              CEOA Matric Hr.sec School, Madurai.
            </li>
            <li>
              <span>BE(Automobile): 7.1 cgpa</span>
              <br />
              PSG College of Technology, Coimbatore.
            </li>
          </ul>
        </div>
      

      {/* //////////////////////////////////////////////////// */}
        <div
          className={`col-lg-12 tab-contents  ${exp ? "active-tab" : ""}`}
          id="Experience"
        >
          <ul>
          <li>
            <span>May'23 - June'23</span> <br/>
            INTERN SOFTWARE ENGINEER - TBD-HEALTH, Remote
            <br/>
              <ul style={{listStyleType:"rounded",color:"#C0C0C0"}} >
              <li style={{color:"#C0C0C0",fontSize:"14px"}}>Developed features in UI/front-end for the product website and backend for partner services with Next.js  and AWS DynamoDB</li>
                 
              </ul>
              
            </li>
            <li>
            <span>Dec'21 - July'22</span> <br/>
              GET-Program Management - Violin Technologies, Chennai 
            <br/>
              <ul style={{listStyleType:"rounded",color:"#C0C0C0"}} >
              <li style={{color:"#C0C0C0",fontSize:"14px"}}>Supply chain management</li>
              <li style={{color:"#C0C0C0",fontSize:"14px"}}>Customer Relationship management</li>    
              </ul>
              
            </li>
            <li>
            <span>Dec'20 - june'21</span><br/>
              Bussiness Development Associate - Think & Learn Private
              Ltd (byjus), Coimbatore
              <br />
              <ul>
              <li style={{color:"#C0C0C0",fontSize:"14px"}}>Cold Calling</li>
              <li style={{color:"#C0C0C0",fontSize:"14px"}}>Virtual and Direct sales</li>
              
              </ul>
            </li>
          </ul>
        </div>
      
    </div>
    </div>
      </div>
  );
}

export default About;
