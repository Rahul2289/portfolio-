import React from "react";
import "./index.css";
import img from "../images/skills.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import bootstarp from "../images/bootstarp.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import materialui from "../images/materialui.png";

const Skills = () => {
  return (
    <div className="Skills-container">
      <img className="skill-image" src={img} alt="slills" />
      <h2 className="font-effect-emboss">Skills</h2>
      <img className="common html" src={html} alt="" />
      <img className="common css" src={css} alt="" />
      <img className="common javascript" src={javascript} alt="" />
      <img className="common bootstrap" src={bootstarp} alt="" />
      <img className="common react" src={react} alt="" />
      <img className="common redux" src={redux} alt="" />
      <img className="common materialui" src={materialui} alt="" />
    </div>
  );
};

export default Skills;
