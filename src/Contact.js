import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


function Contact() {
  return (
    


<div id="contact" class="container">
  <div class="row">
    <div class="col-lg-5">
      <div class="contact-l">
      <h1>Connect With Me</h1>
      <div class="contact-l-icons">
        <div><a href="https://github.com/ManivasagamSuresh" style={{color: "#fff"}} target="_blank"><span style={{marginBottom:"60px"}}><AiOutlineGithub size={"3em"}/></span></a><span style={{marginLeft:"20px"}}>Github</span></div><br/>
        <div><a href="https://www.linkedin.com/in/manivasagam-s-3534bb157/" style={{color: "0077b5"}} target="_blank"><span style={{marginBottom:"60px"}}><BsLinkedin size={"3em"}/></span></a><span style={{marginLeft: "20px"}}>LinkedIn</span></div><br/>
        <div><MdEmail size={'3em'}/><span style={{marginLeft:"10px" }}>s.kishore123.64@gmail.com</span></div>
      </div>
    </div>
    </div>
    <div class="col-lg-7">
      <div class="contact-r">
        <h1 class="display-4">Say Hi</h1>
      <form name="submit-to-google-sheet">
        <input type="text" name="Name" value="Name*" required/><br/>
        <input type="email" name="Email" value="Email*" required/><br/>
        <textarea name="Message" id="" cols="50" rows="7" required>Your Message*</textarea><br/>
        <button type="submit" class="submit">Send  <i class="fa fa-paper-plane" aria-hidden="true" style={{color:"#fff"}}></i></button>
      </form>
      
    
    <br/>
    <span id="msg"></span>
    </div>
  </div>
</div>
</div>



  )
}

export default Contact