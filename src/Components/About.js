import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Nosotros</p>
        <h1 className="primary-heading">Conoce sobre la empresa</h1>
        <p className="primary-text">
          Nuestra misión es impulsar el éxito de nuestros clientes mediante soluciones tecnológicas innovadoras y servicios de soporte técnico excepcionales. Nos esforzamos por ser un socio de confianza en el viaje digital de cada empresa con la que trabajamos.
        </p>
        <p className="primary-text">
          Aspiramos a crear un futuro donde la tecnología simplifique y mejore la vida de nuestros clientes.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleScrollToServices}>
            Servicios<FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;