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

function Skillicons() {
  return (
    <div id="skills" className="col-lg-12">
      <h4 className="Tech">Technologies and Tools :</h4>
      <div id="row1" className="row">
        <div className="col-lg-6 row6">
          <div className="gridicon">
            <img src={html} alt="" />
            <span>HTML</span>
          </div>
          <div className="gridicon">
            <img src={js} alt="" id="jsicon" />
            <span>Java Script</span>
          </div>
        </div>
        <div className="col-lg-6 row6">
          <div className="gridicon">
            <img src={css} alt="" id="cssicon" />
            <span>CSS</span>
          </div>
          <div className="gridicon">
            <img src={boot} alt="" id="bootstrapicon" />
            <span>BootStrap</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className=" gridicon">
            <img src={rct} alt="" />
            <span>React</span>
          </div>
          <div className=" gridicon">
            <img src={node} alt="" />
            <span>Node Js</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className=" gridicon" id="mongoDB" >
            <img src={mongo} alt="" />
            <span>MongoDB</span>
          </div>

          <div className="gridicon">
            <img src={redux} alt="" />
            <span>Redux</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className=" gridicon">
            <img src={nxt} alt="" />
            <span>Next JS</span>
          </div>
          <div className="gridicon">
            <img src={tailwind} alt="" />
            <span style={{ marginLeft: "10px" }}>Tailwind CSS</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className="gridicon">
            <img src={JWT} alt="" />
            <span>JWT</span>
          </div>
          <div className="gridicon">
            <img src={github} alt="" />
            <span>GitHub</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className=" gridicon">
            <img src={post} alt="" />
            <span>Postman</span>
          </div>
          <div className="gridicon">
            <img src={firebase} alt="" />
            <span>Firebase</span>
          </div>
        </div>

        <div className="col-lg-6 row6">
          <div className="gridicon">
            <img src={sql} alt="" />
            <span>SQL</span>
          </div>
          <div className="gridicon">
            <img src={socket} alt="" />
            <span>Socket IO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillicons;
