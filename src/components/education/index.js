import React from "react";
import "./index.css";
import img from "../images/SchoolBoard.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Education = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="Education-container">
      <img className="Education-image" src={img} alt="board" />
      <h2 className="font-effect-emboss">Education</h2>
      <div className="slider-container">
        <Slider {...settings} className="slider-wrapper">
          <div className="animate__animated animate__fadeInTopLeft ">
            <p>
              <span> DEGREE:</span> Bachlor of Technology
            </p>
            <p>
              <span>Institute Name:</span> Malla College of Engineering
            </p>
            <p>
              <span>SPELIZATION:</span> Electronis and Communication Engineering
            </p>
            <p>
              <span> YEAR:</span>2017-2022
            </p>
          </div>
          <div className="animate__animated animate__fadeInTopLeft ">
            <p>
              <span> DEGREE:</span> Higher Secondary Class
            </p>
            <p>
              <span>Institute Name:</span> Sr junior College
            </p>
            <p>
              <span>SPELIZATION:</span> Maths ,Physics,and Chemistry
            </p>
            <p>
              <span> YEAR:</span>2015-2017
            </p>
          </div>
          <div className="animate__animated animate__fadeInTopLeft ">
            <p>
              <span> DEGREE:</span> Secondary School Ciertificate
            </p>
            <p>
              <span>Institute Name:</span> Bhargavi Vidhyanikethan school
            </p>

            <p>
              <span> YEAR:</span>2015
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Education;
