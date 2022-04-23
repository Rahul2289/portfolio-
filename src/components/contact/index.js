import React from "react";
import "./index.css";
import comment from "../images/comment.png";
import linkdein from "../images/linkdine.png";
import email from "../images/email.png";
import instagram from "../images/instagram.png";
import phoneImg from "../images/contact.png";
import phoneIcon from "../images/mobile.png";
import github from "../images/github.png";
const Contact = () => {
  return (
    <div className="Contact-container">
      <h2 font-effect-emboss>Get in Touch</h2>

      <img src={comment} alt="" className="comment" />
      <img src={phoneImg} alt="phone images" className="Mobile-Image" />

      <a
        href="https://www.linkedin.com/in/rahul-goud-168852209/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkdein} alt="" className="common-img linkedin" />
      </a>

      <a
        href="https://www.instagram.com/rahul_goud_02/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" className="common-img instagram" />
      </a>

      <a
        href="https://github.com/Rahul2289/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" className="common-img github" />
      </a>

      <a href="mailto:burrarahulgoud1999@gmail.com">
        <img src={email} alt="" className="common-img email" />
      </a>
      <a href="tel:8367436320">
        <img src={phoneIcon} alt="" className="common-img mobile" />
      </a>
    </div>
  );
};

export default Contact;
