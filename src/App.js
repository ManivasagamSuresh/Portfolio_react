import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
// import Topbar from "./Topbar";
// import Homeintro from "./Homeintro";
// import About from "./About";
// import { useEffect, useState } from "react";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import { BsWindowSidebar } from "react-icons/bs";
// import Projectcard from "./Projectcard";
// import Skills from "./Skills";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";

function App() {
 
  return (
    <div className="container">
      {/* <Topbar /> */}
      <Topbar/>
      {/* <Homeintro /> */}
      <Home/>
      {/* <About /> */}
      <About/>

      {/* <Skills/> */}
      <Skills/>
      {/* <Projects /> */}
      <Project/>
      <hr className="col-lg-12" id="line" />
      {/* <Contact /> */}
      <Contact/>
      <div className="col-lg-12" id="credits">@2022 Manivasagam</div>

    </div>
    
  );
}

export default App;
