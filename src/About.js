import React, { useState } from 'react'
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/JS.svg'
import boot from './images/bootstrap.svg'
import rct from './images/react.svg'
import mongo from './images/mongodb.svg'
import node from './images/nodejs.svg'
import npm from './images/npm.png'
import post from './images/postman.png'
import redux from './images/redux.svg'
import sql from './images/mysql.svg'
import git from './images/git.svg'



function About() {
    let [edu,setEdu]=useState(true) 
    let [exp,setExp]=useState(false) 
    let [Skill,setSkill]=useState(false) 
    let opentab=(i)=>{
if(i=='Education'){setEdu(true);setExp(false);setSkill(false)}
if(i=='Experience'){setEdu(false);setExp(true);setSkill(false)}
if(i=='skills'){setEdu(false);setExp(false);setSkill(true)}
    }
  return (
    <div id="about">
<div className="about-title container"><span><h1 className="display-4">About</h1></span>
<p className="about-info container">I am a self-learner, curious and enthusiastic in learning new things. Seeking a perfect role to enhance and explore my technical knowledge  in full stack development.</p>
<div className="container">
    <div className="row">
        <div className="about col-lg-12">
          <div className="tab-titles">
            
            <p className={`tab-links ${edu?'active-link':''}`} onClick={()=>{opentab('Education')}}>Education</p>
            <p className={`tab-links ${exp?'active-link':''}`} onClick={()=>{opentab('Experience')}}>Experience</p>
            <p className={`tab-links ${Skill?'active-link':''}`} onClick={()=>{opentab('skills')}}>Skills</p>
          </div>
          </div>

          <div className="col-lg-12">

            <div className={`tab-contents  ${Skill?"active-tab":""}`} id="skills" >
              <h4 className="Tech">Technologies and Tools :</h4>
              
              <div className="gridicon1 row">
              <div className="col-lg-3"><img src={html} alt=''/><span>HTML</span></div>
              <div className="col-lg-3"><img src={js} alt=""  id="jsicon"/><span>Java Script</span></div>
              <div className="col-lg-3"><img src={css} alt=""  id="cssicon"/><span>CSS</span></div>
              <div className="col-lg-3"><img src={boot} alt=""  id="bootstrapicon" /><span>BootStrap</span></div>
              </div>
              <div className="gridicon2 row">
                <div className="col-lg-3"><img src={rct} alt=""  /><span>React</span></div>
                <div className="col-lg-3"><img src={node} alt=""  /><span>Node Js</span></div>
                <div className="col-lg-3" id="mongoDB"><img src={mongo} alt="" /><span>Mongo DB</span></div>
                <div className="col-lg-3"><img src={redux} alt=""  /><span>Redux</span></div>
                </div>
                <div className="gridicon3 row">
                  <div className="col-lg-3"><img src={sql} alt=""  /><span>My SQL</span></div>
                  <div className="col-lg-3"><img src={post} alt=""  /><span>Postman</span></div>
                  <div className="col-lg-3"><img src={npm} alt=""  /><span>NPM</span></div>
                  <div className="col-lg-3"><img src={git} alt="" /><span>Git</span></div>
                  

                   </div>
              <div className="softskills container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="softskills-P">Soft Skills :</h4>
                    <ul style={{listStyleType:"disc"}}>
                      <li>Time Management</li>
                      <li>Adaptability</li>
                      <li>Team Work</li>
                    </ul>
                  </div>  
                  <div className="col-lg-6">
                    <div className="softskills-Lbox">
                    <h4 className="softskills-L">Languages Known :</h4>
                    <ul style={{listStyleType:"disc"}}>
                      <li>English</li>
                      <li>Tamil</li>
                    </ul>
                    </div>
                  </div>    
                </div>
              </div>
            </div>


          <div className={`tab-contents  ${edu?"active-tab":""}`} id="Education">
            <ul>
              <li><span>SSLC: 96.6%</span><br/>AKNU S.Sundar Matric Hr.sec School,Madurai.</li>
              <li><span>HSC: 93.5%</span><br/>CEOA Matric Hr.sec School,Madurai.</li>
              <li><span>BE(Automobile): 7.1 cgpa</span><br/>PSG College of Technology,Coimbatore.</li>     
            </ul>
          </div>
          

          <div className={`tab-contents  ${exp?"active-tab":""}`} id="Experience">
            <ul>
              <li><span>Dec'21-July'22</span><br/>GET-Program Management ,Violin Technologies,Chennai</li>
              <li><span>Dec'20-june'21</span><br/>Bussiness Development Associate ,Think & Learn Private Ltd,Coimbatore</li>
            </ul>
          </div>

            
          </div>
        
        </div>
    </div>
 </div> 
 
</div>

  )
 

}

export default About