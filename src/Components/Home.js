import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Logo from "../Assets/Logo.png"; // Asegúrate de importar la imagen de tu logo
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading fade-in">Bienvenidos</h1>
          <p className="primary-text">
            Somos expertos en desarrollo de software, ofrecemos soporte técnico especializado y garantizamos el mantenimiento continuo de sistemas críticos para tu negocio. Descubre cómo podemos optimizar la eficiencia y seguridad de tus operaciones con soluciones a medida y soporte personalizado.
          </p>
          <button className="secondary-button" onClick={handleScrollToAbout}>
            Sobre nosotros <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" className="animated-logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
