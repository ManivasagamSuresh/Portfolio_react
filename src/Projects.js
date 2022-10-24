import React from 'react'
import img from './images/Projects-yellow.jpg'

function Projects() {
  return (
    <div id="project">
<div class="container projects">
  <div class="row">
    
    <div class="col-lg-12">
      <h1 class="projects-heading display-3">Projects</h1>
      <h4 class="projects-des">What I Built</h4>
    </div>
    <div class="col-lg-4">
      <div  class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Brewaries</h5>
          <p class="card-text">To display the brewaries list of searched state with its address and URL</p>
          <a href="https://lambent-unicorn-b71d41.netlify.app" target="_blank" class="btn btn-outline-warning">Check Out</a>
        </div>
      </div></div>

      <div class="col-lg-4">
      <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Wild Animals</h5>
          <p class="card-text">To display the random wild animal name and age with its image while refresh the page</p>
          <a href="https://unrivaled-toffee-e10c83.netlify.app" target="_blank" class="btn btn-outline-warning">Check Out</a>
        </div>
      </div></div>

      <div class="col-lg-4">
      <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Covid19 Cases</h5>
          <p class="card-text">To display the total No of affected , recovered and deaths in the country searched</p>
          <a href="https://deft-gelato-7a0dfe.netlify.app/" target="_blank" class="btn btn-outline-warning">Check Out</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

export default Projects