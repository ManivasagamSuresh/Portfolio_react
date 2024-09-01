import React from 'react'
import "./Skills.css"
import Softskills from '../Softskills/Softskills';
import Skillicons from '../Skillicons/Skillicons';




function Skills() {
    return (
    <div id="skill"  className="row"> 
      <div className="col-lg-12">
      <h1 className="display-4 skillsHeading">SKILLS</h1>
      <div className="row">
      <Skillicons/> 
      </div>
      <div className="row">
      <Softskills/>
      </div>
      </div>     
    </div>
  )
}

export default Skills