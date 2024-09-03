import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import MobNavbar from "../MobNavbar/MobNavbar";


function Navbar() {
  const [mobNav, setMobileNav] = useState(false);

  const navigate = useNavigate();
  console.log(window.location.pathname);
  return (
    <div className="flexContainer">
      
     
        <div className="containernav ">
        <div
        className="mobileMenuIcon"
       
      >
          {
          !mobNav  && <LuMenu  className="hamburgerMenu" onClick={() => {
            setMobileNav(true);
          }}/>
        }
        
      </div>
      {mobNav ? (
        <MobNavbar setMobileNav={setMobileNav}/>
      ) : (
          <nav className="navContainer">
            <div
              id="link1"
              className={`navlinks ${window.location.pathname === "/" && "activepage"}`}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </div>

            <div
              id="link2"
              className={`navlinks ${window.location.pathname === "/about" && "activepage"}`}
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </div>

            <div
              id="link3"
              className={`navlinks ${window.location.pathname === "/skills" && "activepage"}`}
              onClick={() => {
                navigate("/skills");
              }}
            >
              Skills
            </div>

            <div
              id="link4"
              className={`navlinks ${window.location.pathname === "/projects" && "activepage"}`}
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </div>

            <div
              id="link5"
              className={`navlinks ${window.location.pathname === "/contact" && "activepage"}`}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </div>
          </nav>
          )}
        </div>
      
    </div>
  );
}

export default Navbar;
