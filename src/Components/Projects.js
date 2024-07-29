import React from "react";
import TaskieTamer from "../Assets/icon.png";
import { FiArrowRight } from "react-icons/fi";


const Projects = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div>
        </div>
        <div className="home-text-section">
          <p className="primary-subheading">Proyectos</p>
          <h1 className="primary-heading">
            Conoce sobre el proyecto en desarrollo
          </h1>
          <button className="secondary-button" onClick={() => window.location.href = "http://localhost:4200/login"}>
            Sitio del proyecto <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={TaskieTamer} alt="" className="animated-logo"/>
        </div>
      </div>
    </div>
  );
};


export default Projects;
