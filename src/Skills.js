import React, { useState } from 'react'
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




function Skills() {
  


  
  return (
    <div id="skill"  >
      <div className="row">
      <div className="col-lg-12">
      <h1 className="display-4">SKILLS</h1>

      <div id="skills">
        
          {/* <div className="col-lg-12"> */}
            <h4 className="Tech">Technologies and Tools :</h4>

            <div id='row1' >
              
              <div className="gridicon1">
                <img src={html} alt="" style={{width:"75px"}}/>
                <span>HTML</span>
              </div>
              <div className="gridicon1">
                <img src={js} alt="" id="jsicon" style={{width:"75px"}}/>
                <span>Java Script</span>
              </div>
              <div className="gridicon1">
                <img src={css} alt="" id="cssicon" style={{width:"75px"}}/>
                <span>CSS</span>
              </div>
              <div className="gridicon1">
                <img src={boot} alt="" id="bootstrapicon" style={{width:"75px"}}/>
                <span>BootStrap</span>
              </div>
            </div>
            <div id='row2'>
              <div className=" gridicon2">
                <img src={rct} alt="" style={{width:"75px"}}/>
                <span>React</span>
              </div>
              <div className=" gridicon2">
                <img src={node} alt="" style={{width:"75px"}}/>
                <span>Node Js</span>
              </div>
              <div className=" gridicon2" id="mongoDB">
                <img src={mongo} alt="" style={{width:"75px"}}/>
                <span>Mongo DB</span>
              </div>
             
              <div className="gridicon2">
                <img src={redux} alt="" style={{width:"75px"}}/>
                <span>Redux</span>
              </div>
            </div>


            <div id="row3">
              
              <div className=" gridicon3">
                <img src={post} alt="" style={{width:"75px"}}/>
                <span>Postman</span>
              </div>
              <div className="gridicon3">
                <img src={JWT} alt="" style={{width:"75px"}}  />
                <span>JWT</span>
              </div>
              <div className="gridicon3">
                <img src={github} alt="" style={{width:"75px"}}/>
                <span>GitHub</span>
              </div>
              <div className="gridicon3">
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
      
    </div>
    </div>
      // </div>
  )
}

export default Skills