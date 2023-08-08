import React from 'react'
import img from '../../images/Projects-yellow.jpg'
// import Projectcard from './Projectcard'
import "./Project.css"
import Projectcard from '../Projectcard/Projectcard'

function Project() {
  return (
  <div className="row" id="project">
    <div className="col-lg-12">
      <h1 className="projects-heading display-5">PROJECTS</h1>
      <h2 className="projects-des">What I Built</h2>
      <h4>Credentials</h4>
      <div>Admin: admin@gmail.com, Password: admin</div>
      <div style={{marginBottom:"50px"}}>User: test@gmail.com, Password: test </div>
    </div>
    <Projectcard/>
  </div>
  

  )
}

export default Project