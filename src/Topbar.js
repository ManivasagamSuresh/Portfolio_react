import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Topbar() {
  return (
    <div className="containernav">     
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button id="navbut"  onClick={()=>{console.log('hello')}}
 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <li className="nav-item"><a id="link1" href="#home" style={{textDecoration: "none"}} className="nav-link">Home</a></li> 
        <li className="nav-item"><a id="link2" href="#about" style={{textDecoration: "none"}} className="nav-link">About</a></li>
        <li className="nav-item"><a id="link4" href="#project" style={{textDecoration: "none"}} className="nav-link">Projects</a></li>
        <li className="nav-item"><a id="link5" href="#contact" style={{textDecoration: "none"}} className="nav-link">Contact</a></li>        
      </div>
    </div>
  </div>
</nav>
    </div>

  )
}

export default Topbar

        