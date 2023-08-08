import React from 'react'
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import js from "../../images/JS.svg";
import boot from "../../images/bootstrap.svg";
import rct from "../../images/react.svg";
import mongo from "../../images/mongodb.svg";
import npm from "../../images/npm.png";
import node from "../../images/node.jpg";
import post from "../../images/postman.png";
import sql from "../../images/sql.png";
import github from "../../images/github.png"
import redux from "../../images/redux.svg"
import firebase from "../../images/firebase.png"
import JWT from "../../images/JWT.png"
import nxt from "../../images/nxt.png"
import tailwind from "../../images/tailwindcss.png"
import socket from "../../images/socketIO.png"

function Skillicons() {
  return (
    <div id="skills" className='col-lg-12'>
      <h4 className="Tech">Technologies and Tools :</h4>
      <div id='row1' >
        <div className="gridicon">
          <img src={html} alt="" style={{width:"75px"}}/>
          <span>HTML</span>
        </div>
        <div className="gridicon">
          <img src={js} alt="" id="jsicon" style={{width:"75px"}}/>
          <span>Java Script</span>
        </div>
        <div className="gridicon">
          <img src={css} alt="" id="cssicon" style={{width:"75px"}}/>
          <span>CSS</span>
        </div>
        <div className="gridicon">
          <img src={boot} alt="" id="bootstrapicon" style={{width:"75px"}}/>
          <span>BootStrap</span>
        </div>
     
      
        <div className=" gridicon">
          <img src={rct} alt="" style={{width:"75px"}}/>
          <span>React</span>
        </div>
        <div className=" gridicon">
          <img src={node} alt="" style={{width:"75px"}}/>
          <span>Node Js</span>
        </div>
        <div className=" gridicon" id="mongoDB">
          <img src={mongo} alt="" style={{width:"75px"}}/>
          <span>Mongo DB</span>
        </div>
       
        <div className="gridicon">
          <img src={redux} alt="" style={{width:"75px"}}/>
          <span>Redux</span>
        </div>
    
        
        <div className=" gridicon">
          <img src={nxt} alt="" style={{width:"75px"}}/>
          <span>Next JS</span>
        </div>
        <div className="gridicon">
          <img src={tailwind} alt="" style={{width:"75px"}}  />
          <span style={{marginLeft:"10px"}}>Tailwind CSS</span>
        </div>
        <div className="gridicon">
          <img src={JWT} alt="" style={{width:"75px"}}/>
          <span>JWT</span>
        </div>
        <div className="gridicon">
          <img src={github} alt="" style={{width:"75px"}}/>
          <span>GitHub</span>
        </div>
    
        
        <div className=" gridicon">
          <img src={post} alt="" style={{width:"75px"}}/>
          <span>Postman</span>
        </div>
        <div className="gridicon">
          <img src={firebase} alt="" style={{width:"75px"}}  />
          <span>Firebase</span>
        </div>
        <div className="gridicon">
          <img src={sql} alt="" style={{width:"75px"}}/>
          <span>SQL</span>
        </div>
        <div className="gridicon">
          <img src={socket} alt="" style={{width:"75px"}}/>
          <span>Socket IO</span>
        </div>
        </div>
    </div>
  )
}

export default Skillicons