// import logo from "./logo.svg";
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
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
 
  return (
    <BrowserRouter>
    <div>
      {/* <Topbar />    */}
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
  <div className="flexContainer">
        <div className="Creditsfooter " id="credits">@2024 Manivasagam Suresh</div>
  </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
