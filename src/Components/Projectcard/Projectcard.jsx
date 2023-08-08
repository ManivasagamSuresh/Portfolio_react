import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';
import myntra from "../../images/myntra.png"
import youtube from "../../images/youtube.png"
import chat from "../../images/chat.png"
import catalog from "../../images/item.png"





function Projectcard() {
  return (
    

  <>
    <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
          <div className="card-d">
          <h2 className="card-title">Myntra Clone</h2>
          <p className="card-text">Users can Sign-up, Sign-in with Email id. Secured with  JSON web token Authentication. Allows users to view, wishlist, move products to cart and buy the products with help of Razor pay payment gateway.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> :  React.js, Node.js, MongoDB, JWT, Redux Toolkit, Razor pay, Bootstrap</p>
          <div className='projectcard-icons'>
          <a className="card-link" href="https://grand-quokka-39f552.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"} className="giticon"/>View Project</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/myntra-clone-frontend" target="_blank"><FiGithub size={"1.5em"} className="giticon"/>Front-End</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/myntra-clone-backend" target="_blank"><VscGithub size={"1.5em"} className="giticon"/>Back-End</a>
          </div>
          </div>
          <div className='card-i'>
          <img className="project-img" src={myntra} alt="" />
        </div>
        </div>
        
      </div>
      </div>

    
    <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
         <div className='card-d'>
          <h2 className="card-title">YouTube Clone</h2>
          <p className="card-text">Users can Sign-up, Sign-in with Email id. Secured with  JSON web token Authentication. Allows users to view, like, dislike,  add comments to the video, subscribe a channel, and post a video.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, MongoDB, JWT, Redux Toolkit, sockt.io, Firebase</p>
          <div className='projectcard-icons'>
          <a className="card-link" href="https://jocular-vacherin-dcbf9f.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"} className="giticon"/>View Project</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/Youtube-Clone-FrontEnd" target="_blank"><FiGithub size={"1.5em"} className="giticon"/>Front-End</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/YoutubeClone-Backend" target="_blank"><VscGithub size={"1.5em"} className="giticon"/>Back-End</a>  
          </div >
         </div>
         <div className='card-i'>
          <img className="project-img" src={youtube} alt="" />
        </div>
         
        </div>
      </div>
      </div>


      <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
        <div className='card-d'>
          <h2 className="card-title">Chat-App</h2>
          <p className="card-text">Users can Login with their G-mail. Create a chat box ,receive and send messages in the chat box</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, Mongoose, Pusher, Firebase </p>
          <div className='projectcard-icons'>
          <a className="card-link" href="https://capable-gelato-a223ec.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"} className="giticon"/>View Project</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/ChatApp-FrontEnd" target="_blank"><FiGithub size={"1.5em"}className="giticon"/>Front-End</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/ChatApp-backend-" target="_blank"><VscGithub size={"1.5em"} className="giticon"/>Back-End</a>
          </div>
          </div>
          <div className='card-i'>
          <img className="project-img" src={chat} alt="" />
        </div>
        </div>
      </div>
      </div>


      <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
        <div className='card-d'>
          <h2 className="card-title">Item Catalog</h2>
          <p className="card-text">Users can view the Products and its details.Admin can create,edit and delete the products.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, MongoDB, Bootstrap  </p>
          <div className='projectcard-icons'>
          <a className="card-link" href="https://preeminent-frangipane-88b7b3.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"} className="giticon"/>View Project</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/capstone-frontend" target="_blank"><FiGithub size={"1.5em"}className="giticon"/>Front-End</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/capstone-backend" target="_blank"><VscGithub size={"1.5em"} className="giticon"/>Back-End</a>
          </div>
          </div>
          <div className='card-i'>
          <img className="project-img" src={catalog} alt="" />
        </div>
        </div>
      </div>
      </div>




  </>
  

  )
}

export default Projectcard