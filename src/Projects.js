import React from 'react'
import img from './images/Projects-yellow.jpg'
import Projectcard from './Projectcard'

function Projects() {
  return (
    

  <div className="row" id="project">
    
    <div className="col-lg-12">
      <h1 className="projects-heading display-3">Projects</h1>
      <h2 className="projects-des">What I Built</h2>
    </div>


    <Projectcard/>


{/*     
    <div className="col-lg-4">
      <div  className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">YouTube Clone</h5>
          <p className="card-text">users can Sign-up ,Sign-in ,subscribe a channel. View , like ,dislike and add comments to the video</p>
          <a href="https://jocular-vacherin-dcbf9f.netlify.app" target="_blank" className="btn btn-outline-warning">Check Out</a>
        </div>
      </div>
      </div>

      <div className="col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Chat-App</h5>
          <p className="card-text">Users can Login with their G-mail, create a chat box and send messages in the chat box</p>
          <a href="https://capable-gelato-a223ec.netlify.app" target="_blank" className="btn btn-outline-warning">Check Out</a>
        </div>
      </div>
      </div>

      <div className="col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Item Catalog</h5>
          <p className="card-text">To display the total No of shoes available.Admin can create,edit and delete the products.</p>
          <a href="https://preeminent-frangipane-88b7b3.netlify.app" target="_blank" className="btn btn-outline-warning">Check Out</a>
        </div>
      </div>
    </div> */}
  </div>
  

  )
}

export default Projects