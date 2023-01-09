import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


function Contact() {
  return (
  <div className="row" id="contact">
    <div className="col-lg-5 contact-l">
      
      <h1>Connect With Me</h1>
      <div className="contact-l-icons">
        <div><a href="https://github.com/ManivasagamSuresh" style={{color: "#fff"}} target="_blank"><span style={{marginBottom:"60px"}}><AiOutlineGithub size={"3em"}/></span></a><span style={{marginLeft:"20px"}}>Github</span></div><br/>
        <div><a href="https://www.linkedin.com/in/manivasagam-s-3534bb157/" style={{color: "0077b5"}} target="_blank"><span style={{marginBottom:"60px"}}><BsLinkedin size={"3em"}/></span></a><span style={{marginLeft: "20px"}}>LinkedIn</span></div><br/>
        <div><MdEmail size={'3em'}/><span style={{marginLeft:"10px" }}>s.kishore123.64@gmail.com</span></div>
      </div>
   
    </div>
    <div className="col-lg-7 contact-r">
      
        <h1 className="display-4">Say Hi</h1>
      <form>
        <input type="text"  placeholder='Name*' required/><br/>
        <input type="email" placeholder="Email*" required/><br/>
        <textarea  id="" cols="50" rows="7" placeholder="Your Message*" required></textarea><br/>
        <button type="submit" className="submit">Send  <i className="fa fa-paper-plane" aria-hidden="true" style={{color:"#fff"}}></i></button>
      </form> 
    <br/>
    <span id="msg"></span>
    </div>
  
</div>




  )
}

export default Contact