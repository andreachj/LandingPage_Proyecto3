import React from "react";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import { FiArrowRight } from "react-icons/fi";

const Services = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("members");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const workInfoData = [
    {
      image: service1,
      title: "Desarrollo de software",
      text: "Creamos soluciones de software a medida que se ajustan perfectamente a las necesidades y objetivos de tu negocio.",
    },
    {
      image: service2,
      title: "Consultoría tecnológica",
      text: "Asesoramos a tu empresa en la implementación de soluciones tecnológicas que impulsen tu crecimiento y eficiencia.",
    },
    {
      image: service3,
      title: "Soporte técnico especializado",
      text: "Ofrecemos soporte técnico integral para garantizar el correcto funcionamiento de tus sistemas y aplicaciones.    ",
    },   
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Servicios</p>
        <h1 className="primary-heading">Que ofrecemos</h1>
        <p className="primary-text">
        Desde nuestros inicios, hemos crecido y evolucionado, ampliando nuestra gama de servicios.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleScrollToServices}>
            Miembros<FiArrowRight />
          </button>
        </div>
    </div>
  );
};

export default Services;
