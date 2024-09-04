import React from 'react'
import "./Skills.css"
import Softskills from '../Softskills/Softskills';
import Skillicons from '../Skillicons/Skillicons';




function Skills() {
    return (
    <div id="skill" className='Skills_OuterContainer flexContainer'> 
    <div className='MinAndMAxDimention'>
      <h1 className=" skillsHeading">SKILLS</h1>
      <div className='Skills_OuterContainer'>
      <Skillicons/> 
      </div>
      <div className='softSkills_OuterContainer'>
      <Softskills/>
      </div>
      </div>
    </div>
  )
}

export default Skills