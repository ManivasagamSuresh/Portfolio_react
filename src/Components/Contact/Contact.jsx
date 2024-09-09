import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import "./Contact.css";

function Contact() {
  const [mail, setmail] = useState(false);
  const [loading,setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const send = await axios.post("https://portfolio-zw7l.onrender.com/sendmail", values);
        console.log(send.data);
        if (send.data) {
          formik.resetForm();
          setmail(true);
          sendEmail();
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    },
  });

  const sendEmail = async () => {
    setTimeout(() => {
      setmail(false);
    }, 2000);
  };
  return (
    <div className="flexContainer">
      <div className="contactContainer MinAndMAxDimention" id="contact">
        <div className="contact-l">
          <div className="Contact-ConnectHeading">Connect With Me</div>
          <div className="contact-l-icons">
            <div className="Contact_socialIconsContainer">
              <a
                href="https://github.com/ManivasagamSuresh"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiOutlineGithub className="Contact_socialIcon" />
                </span>
              </a>
              <span>Github</span>
            </div>
            <br />
            <div className="Contact_socialIconsContainer">
              <a
                href="https://www.linkedin.com/in/manivasagam-s-3534bb157/"
                style={{ color: "0077b5" }}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <BsLinkedin className="Contact_socialIcon" />
                </span>
              </a>
              <span>LinkedIn</span>
            </div>
            <br />
            <div className="Contact_socialIconsContainer">
              <MdEmail className="Contact_socialIcon" />
              <span>s.kishore123.64@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact-r">
          <div className="sayHi">Say Hi</div>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              required
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
            <br />
            <input
              type="email"
              placeholder="Email*"
              required
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
            />
            <br />
            <textarea
              id=""
              cols="50"
              rows="7"
              placeholder="Your Message*"
              required
              value={formik.values.message}
              name="message"
              onChange={formik.handleChange}
            ></textarea>
            <br />
            {
              loading  ?  <button type="submit" className="submit">
              Sending...
              <i className="fa fa-paper-plane" aria-hidden="true" style={{ color: "#fff" }}></i>
            </button> :  <button type="submit" className="submit">
              Send <IoIosSend />{" "}
              <i className="fa fa-paper-plane" aria-hidden="true" style={{ color: "#fff" }}></i>
            </button>
             }
           
          </form>
          <br />
          {mail && <span id="msg">Mail Sent Successfully !</span>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
