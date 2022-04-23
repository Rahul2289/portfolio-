import React from "react";
import "./index.css";
import img from "../images/Theaters.png";
import Slider from "react-slick";
import CalculaterImg from "../images/calculater.png";
import movieImg from "../images/movie.png";
import ecommerImg from "../images/shop.png";
const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="Projects-container">
      <img src={img} alt="images" />
      <h2 className="font-effect-emboss">Projects</h2>
      <div className="projects-slider-container">
        <Slider {...settings} className="projects-slider-wrapper">
          <div className="project-list">
            <h1>Calculator</h1>
            <img src={CalculaterImg} alt="calculater" />
            <div className="btn-container">
              <a
                href="https://calculator-rahul22.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>view</button>
              </a>
              <a
                href="https://github.com/Rahul2289/calculaor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>code</button>
              </a>
            </div>
          </div>
          <div className="project-list">
            <h1>MovieApp</h1>
            <img src={movieImg} alt="movie" />
            <div className="btn-container">
              <a
                href="https://rahul2289.github.io/MovieApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>view</button>
              </a>
              <a
                href="https://github.com/Rahul2289/MovieApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>code</button>
              </a>
            </div>
          </div>
          <div className="project-list">
            <h1>Ecommers</h1>
            <img src={ecommerImg} alt="ecommers" />
            <div className="btn-container">
              <a
                href="https://rahul2289.github.io/Ecommers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>view</button>
              </a>
              <a
                href="https://github.com/Rahul2289/Ecommers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>code</button>
              </a>{" "}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
