import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Topbar from './Topbar';
import Homeintro from './Homeintro';
import About from './About';
import { useState } from 'react';
import Projects from './Projects';
import Contact from './Contact';

function App() {
 
  return (
    <>
    <Topbar/>
    <Homeintro/>
    <About/>
    <Projects/>
    <hr id="line"/>
    <Contact/>
    <div id="credits">@2022 Manivasagam</div>

    </>
  );
}

export default App;
