import React from 'react'
import img from './images/Projects-yellow.jpg'

function Projects() {
  return (
    

  <div className="row" id="project">
    
    <div className="col-lg-12">
      <h1 className="projects-heading display-3">Projects</h1>
      <h4 className="projects-des">What I Built</h4>
    </div>
    <div className="col-lg-4">
      <div  className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Brewaries</h5>
          <p className="card-text">To display the brewaries list of searched state with its address and URL</p>
          <a href="https://lambent-unicorn-b71d41.netlify.app" target="_blank" className="btn btn-outline-warning">Check Out</a>
        </div>
      </div>
      </div>

      <div className="col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Wild Animals</h5>
          <p className="card-text">To display the random wild animal name and age with its image while refresh the page</p>
          <a href="https://unrivaled-toffee-e10c83.netlify.app" target="_blank" className="btn btn-outline-warning">Check Out</a>
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
    </div>
  </div>
  

  )
}

export default Projects