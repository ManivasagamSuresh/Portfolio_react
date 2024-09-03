import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./MobNavbar.css";
import { useNavigate } from "react-router-dom";

function MobNavbar({ setMobileNav }) {
  const navigate = useNavigate();

  const handleNavigate = (url)=>{
    setMobileNav(false);
    navigate(`${url}`)
  }

  return (
    <div className="mobileNavbarContainer mobileMenuAnimation">
      <div className="mobNavCrossIcon">
        <RxCross2
          className="crossICon"
          onClick={() => {
            setMobileNav(false);
          }}
        />
      </div>
      <div className="mobNavlinksContainer">
        <div
          className={`mobNavlink MobileMenuAnimeFirst`}
          onClick={() => {
            handleNavigate("/");
          }}
        >
          Home
        </div>
        <hr className="MobNavBreakLine"/>

        <div
          className={`mobNavlink MobileMenuAnimeSecond`}
          onClick={() => {
            handleNavigate("/about");
          }}
        >
          About
        </div>
        <hr className="MobNavBreakLine"/>

        <div
          className={`mobNavlink MobileMenuAnimeThird`}
          onClick={() => {
            handleNavigate("/skills");
          }}
        >
          Skills
        </div>
        <hr className="MobNavBreakLine"/>

        <div
          className={`mobNavlink MobileMenuAnimeFourth`}
          onClick={() => {
            handleNavigate("/projects");
          }}
        >
          Projects
        </div>
        <hr className="MobNavBreakLine"/>

        <div
          className={`mobNavlink MobileMenuAnimeFifth`}
          onClick={() => {
            handleNavigate("/contact");
          }}
        >
          Contact
        </div>
        
      </div>
    </div>
  );
}

export default MobNavbar;
