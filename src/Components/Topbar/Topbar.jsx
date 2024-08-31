import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Topbar.css"
import { useNavigate } from "react-router-dom";

function Topbar() {

  const navigate = useNavigate();
  console.log(window.location.pathname)
  return (
    <div className="containernav">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            id="navbut"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-item">
                <div
                  id="link1"
                  
                  style={{ textDecoration: "none", fontSize: "25px" }}
                  className={`nav-link ${window.location.pathname === '/' && 'activepage'}`}
                  onClick={()=>{navigate('/')}}
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="link2"
                  href="#about"
                  style={{ textDecoration: "none", fontSize: "25px" }}
                  className={`nav-link ${window.location.pathname === '/about' && 'activepage'}`}
                  onClick={()=>{navigate('/about')}}
                >
                  About
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="link3"
                  href="#skill"
                  style={{  fontSize: "25px" }}
                  className={`nav-link ${window.location.pathname === '/skills' && 'activepage'}`}
                  onClick={()=>{navigate('/skills')}}
                >
                  Skills
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="link4"
                  href="#project"
                  style={{ fontSize: "25px" }}
                  className={`nav-link ${window.location.pathname === '/projects' && 'activepage'}`}
                  onClick={()=>{navigate('/projects')}}
                >
                  Projects
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="link5"  
                  href="#contact"
                  style={{ fontSize: "25px" }}
                  className={`nav-link ${window.location.pathname === '/contact' && 'activepage'}`}
                  onClick={()=>{navigate('/contact')}}
                >
                  Contact
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
