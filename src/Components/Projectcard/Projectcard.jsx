import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import myntra from "../../images/myntra.png";
import youtube from "../../images/youtube.png";
import tournament from "../../images/tournament.png";
import chat from "../../images/chat.png";
import kavifood from "../../images/kavifood.png";
import catalog from "../../images/item.png";

function Projectcard() {
  return (
    <div className="projectCardContainer">
     

      <div className="card-body">
        <div className="card-d">
          <div className="card-title">Fashion E-Commerce Website (Mar 2023)</div>
          <div className="card-text">
            Users can Sign-up, Sign-in with Email id. Secured with JSON web token Authentication.
            Allows users to view, wishlist, move products to cart and buy the products with help of
            Razor pay payment gateway.
          </div>
          <div>
            <span className="card-tech">Technologies and libraries used: </span>{" "}
            <span className="techUsed">
              {" "}
              React.js, Node.js, MongoDB, JWT, Redux Toolkit, Razor pay, Bootstrap
            </span>
          </div>
          <div className="projectcard-icons">
            <a
              className="card-link"
              href="https://grand-quokka-39f552.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal className="giticon" />
              View Project
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/myntra-clone-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="giticon" />
              Front-End
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/myntra-clone-backend"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="giticon" />
              Back-End
            </a>
          </div>
        </div>
        <div className="card-i">
          <img className="project-img" src={myntra} alt="" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-d">
          <h2 className="card-title">Video Sharing - Social Media Platform (Dec 2022)</h2>
          <div className="card-text">
            Users can Sign-up, Sign-in with Email id. Secured with JSON web token Authentication.
            Allows users to view, like, dislike, add comments to the video, subscribe a channel, and
            post a video.
          </div>
          <div>
            <span className="card-tech">Technologies and libraries used: </span>{" "}
            <span className="techUsed">
              {" "}
              React.js, Node.js, MongoDB,Tailwind CSS, JWT, Redux Toolkit, sockt.io, Firebase
            </span>
          </div>
          <div className="projectcard-icons">
            <a
              className="card-link"
              href="https://cheerful-valkyrie-754245.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal size={"1.5em"} className="giticon" />
              View Project
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/Youtube_frontend_tailwind"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={"1.5em"} className="giticon" />
              Front-End
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/YoutubeClone-Backend"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={"1.5em"} className="giticon" />
              Back-End
            </a>
          </div>
        </div>
        <div className="card-i">
          <img className="project-img" src={youtube} alt="" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-d">
          <h2 className="card-title">Tournament System App (Aug 2023)</h2>
          <div className="card-text">
            Users can Login and join their favorite tournament, cancel and edit their registration.
            Admin can create, edit and delete the tournaments.
          </div>
          <div>
            <span className="card-tech">Technologies and libraries used: </span>{" "}
            <span className="techUsed">
              {" "}
              React.js, Node.js, MongoDB, TailwindCSS, Redux Toolkit{" "}
            </span>
          </div>
          <div className="projectcard-icons">
            <a
              className="card-link"
              href="https://steady-shortbread-751776.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal size={"1.5em"} className="giticon" />
              View Project
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/indiggFrontend"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={"1.5em"} className="giticon" />
              Front-End
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/indiggBackend"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={"1.5em"} className="giticon" />
              Back-End
            </a>
          </div>
        </div>
        <div className="card-i">
          <img className="project-img" src={tournament} alt="" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-d">
          <h2 className="card-title">Chat-App (Feb 2023)</h2>
          <div className="card-text">
            Users can Login with their G-mail. Create a chat box ,receive and send messages in the
            chat box
          </div>
          <div>
            <span className="card-tech">Technologies and libraries used: </span>{" "}
            <span className="techUsed">React.js, Node.js, Mongoose, Pusher, Firebase </span>
          </div>
          <div className="projectcard-icons">
            <a
              className="card-link"
              href="https://capable-gelato-a223ec.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal size={"1.5em"} className="giticon" />
              View Project
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/ChatApp-FrontEnd"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={"1.5em"} className="giticon" />
              Front-End
            </a>
            <a
              className="card-link"
              href="https://github.com/ManivasagamSuresh/ChatApp-backend-"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={"1.5em"} className="giticon" />
              Back-End
            </a>
          </div>
        </div>
        <div className="card-i">
          <img className="project-img" src={chat} alt="" />
        </div>
      </div>

      {/* 
        <div className="card-body">
        <div className='card-d'>
          <h2 className="card-title">Item Catalog</h2>
          <div className="card-text">Users can view the Products and its details.Admin can create,edit and delete the products.</div>
          <div><span className='card-tech'>Technologies and libraries used </span> : React.js, Node.js, MongoDB, Bootstrap  </div>
          <div className='projectcard-icons'>
          <a className="card-link" href="https://preeminent-frangipane-88b7b3.netlify.app" target="_blank"  rel="noreferrer"><BiLinkExternal size={"1.5em"} className="giticon"/>View Project</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/capstone-frontend" target="_blank"  rel="noreferrer"><FiGithub size={"1.5em"}className="giticon"/>Front-End</a>
          <a className="card-link" href="https://github.com/ManivasagamSuresh/capstone-backend" target="_blank"  rel="noreferrer"><VscGithub size={"1.5em"} className="giticon"/>Back-End</a>
          </div>
          </div>
          <div className='card-i'>
          <img className="project-img" src={catalog} alt="" />
        </div>
        </div> */}
    </div>
  );
}

export default Projectcard;



{/* <div className="card-body">
<div className="card-d">
  <div className="card-title" style={{color:"#ffc40a"}}>FOOD E-COMMERCE WEBSITE (Sep 2024)</div>
  <div className="card-text">
    Users can sign-up and sign-in with email, but can also place orders without logging in.
    <br />
    Allows users to view products, add them to the cart, and place orders using Razorpay
    payment gateway.
    <br />
    Users can track their orders through the order summary, where order status and tracking
    links are updated by the admin.
    <br />
    Admins can view all products and orders, and have the ability to update order statuses
    and provide tracking information.
  </div>
  <div>
    <span className="card-tech">Technologies and libraries used: </span>{" "}
    <span className="techUsed">
      {" "}
      Next.js, Tailwind, Redux Toolkit, MongoDB, Razorpay, Nodemailer
    </span>
  </div>
  <div className="projectcard-icons">
    <a
      className="card-link"
      href="https://kaviseyon-foods.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <BiLinkExternal className="giticon" />
      View Project
    </a>
    <a
      className="card-link"
      href="https://github.com/ManivasagamSuresh/kaviseyonFoods"
      target="_blank"
      rel="noreferrer"
    >
      <FiGithub className="giticon" />
      View Code
    </a>
  </div>
</div>
<div className="card-i">
  <img className="project-img" src={kavifood} alt="" />
</div>
</div> */}