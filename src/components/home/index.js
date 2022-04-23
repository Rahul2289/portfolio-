import React from "react";
import "./index.css";
import img from "../images/Homes.png";
const Home = () => {
  return (
    <div className="Home-container">
      <img
        className="home-image animate__animated animate__flip"
        src={img}
        alt="home"
      />
      <div className="home-info font-effect-emboss">
        <h2 className="animate__animated animate__fadeInTopLeft ">Hello</h2>
        <h2 className="animate__animated animate__fadeInTopRight ">
          {" "}
          I'm Rahul Goud
        </h2>
        <h2 className="animate__animated animate__fadeInBottomLeft ">
          Frontend Developer
        </h2>
      </div>
    </div>
  );
};

export default Home;
