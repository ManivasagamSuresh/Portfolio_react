import React from 'react'
import cartoon from './images/programmer-cartoon1-final.jpg'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

function Homeintro() {
  return (
    <div className="container">
    <div className="boxintro" id="home"> 
{/* <div className="boxintro"> */}
    
      <div className="row">
        <div className="col-lg-6 indexi1">
        <div id="home-intro">
        <div id="introname">Hi, I'm <span id="mani">Manivasagam</span></div> 
        <div className="animate-character">FULL STACK DEVELOPER</div>
        <div className="homeicons" style={{marginTop: "20px",width:"20px"}}><a href="https://github.com/ManivasagamSuresh" style={{color: "#fff"}} target="_blank"><AiOutlineGithub size={"3em"}/></a></div>
        <div className="homeicons" style={{marginTop: "20px"}}><a href="https://www.linkedin.com/in/manivasagam-s-3534bb157/" style={{color: '0077b5'}} target="_blank"><BsLinkedin size={"3em"}/></a></div>
        <br/><a href="Manivasagam resume.pdf" download className="btn btn-outline-warning" id="resumedownload" target="_blank">Download CV</a>  
      </div>
      </div>
      <div className="col-lg-6 indexi2" >
        <div id="image1">
        <img src={cartoon} alt="" height="65%" width="100%"/>
        </div>
      </div>
      </div>
    </div>
    </div>
  // </div> 


  )
}

export default Homeintro