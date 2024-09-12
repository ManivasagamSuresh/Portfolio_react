import React from 'react'
import img from '../../images/Projects-yellow.jpg'
// import Projectcard from './Projectcard'
import "./Project.css"
import Projectcard from '../Projectcard/Projectcard'

function Project() {
  return (
  <div className="projectOuterContainer" id="project">
    <div className="ProjectDescriptionContainer">
      <h1 className="projects-heading ">PROJECTS</h1>
      <h2 className="projects-des">What I Built</h2>
      {/* <div className='credsContainer'>
      <h4>Credentials</h4>
      <div>Admin: admin@gmail.com, Password: admin</div>
      <div >User: test@gmail.com, Password: test </div>
      </div> */}
    </div>
    <Projectcard />
  </div>
  

  )
}

export default Project