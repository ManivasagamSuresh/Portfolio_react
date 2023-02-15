import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';

function Projectcard() {
  return (
    

  <>
    <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
          <h2 className="card-title">Myntra Clone</h2>
          <p className="card-text">Users can Sign-up, Sign-in with Email id. Secured with  JSON web token Authentication. Allows users to view, wishlist, move products to cart and buy the products with help of Razor pay payment gateway.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> :  React.js, Node.js, MongoDB, JWT, Redux Toolkit, Razor pay, Bootstrap</p>
          <a className="card-link" href="https://grand-quokka-39f552.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"}/></a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/myntra-clone-frontend" target="_blank"><FiGithub size={"1.5em"}/></a>
        </div>
      </div>
      </div>

    
    <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
          <h2 className="card-title">YouTube Clone</h2>
          <p className="card-text">Users can Sign-up, Sign-in with Email id. Secured with  JSON web token Authentication. Allows users to view, like, dislike,  add comments to the video, subscribe a channel, and post a video.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, MongoDB, JWT, Redux Toolkit, sockt.io</p>
          <a className="card-link" href="https://jocular-vacherin-dcbf9f.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"}/></a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/Youtube-Clone-FrontEnd" target="_blank"><FiGithub size={"1.5em"}/></a>
        </div>
      </div>
      </div>


      <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
          <h2 className="card-title">Chat-App</h2>
          <p className="card-text">Users can Login with their G-mail. Create a chat box ,receive and send messages in the chat box</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, Mongoose, Pusher, Firebase </p>
          <a className="card-link" href="https://capable-gelato-a223ec.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"}/></a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/ChatApp-FrontEnd" target="_blank"><FiGithub size={"1.5em"}/></a>
        </div>
      </div>
      </div>


      <div className="col-lg-12">
      <div  className="card" >
        
        <div className="card-body">
          <h2 className="card-title">Item Catalog</h2>
          <p className="card-text">Users can view the Products and its details.Admin can create,edit and delete the products.</p>
          <p><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, MongoDB, Bootstrap  </p>
          <a className="card-link" href="https://preeminent-frangipane-88b7b3.netlify.app" target="_blank"><BiLinkExternal size={"1.5em"}/></a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/capstone-frontend" target="_blank"><FiGithub size={"1.5em"}/></a>
        </div>
      </div>
      </div>




  </>
  

  )
}

export default Projectcard