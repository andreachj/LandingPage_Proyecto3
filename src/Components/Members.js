import React from "react";
import PicDavid from "../Assets/david.png";
import PicIgnacio from "../Assets/ignacio.png";
import PicEsteban from "../Assets/esteban.png"
import PicAndrea from "../Assets/andrea.png"
import { FiArrowRight } from "react-icons/fi";

const Members = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("projects");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Miembros</p>
        <h1 className="primary-heading2">Conoce más del equipo</h1>
        <p className="primary-text justify">
        Contamos con un equipo multidisciplinario de expertos en tecnología, desarrollo de software, soporte técnico y mantenimiento de sistemas. 
        Cada miembro de nuestro equipo aporta su experiencia y conocimientos para garantizar que ofrecemos soluciones integrales y efectivas.
        </p>
      </div>
      <div className="members-section-bottom">
        <div className="member-card">
          <h2>Ignacio Zelada</h2>
          <img src={PicIgnacio} alt="Ignacio Zelada" />
          <p>
          Ignacio es un miembro proactivo y resiliente de nuestro equipo, conocido por su habilidad para resolver problemas con paciencia y liderazgo. Su flexibilidad y habilidades comunicativas fortalecen nuestro enfoque colaborativo.
          </p>
          <p className="role">Coordinador General</p>
        </div>
        <div className="member-card">
          <h2>Esteban Barrera</h2>
          <img src={PicEsteban} alt="Esteban Barrera" />
          <p>
          Esteban destaca por su apertura a opiniones constructivas, disciplina y paciencia. Siempre positivo y creativo, fomenta el trabajo en equipo y asegura la excelencia en cada proyecto con su empatía y dedicación.
          </p>
          <p className="role">Coordinador de Desarrollo</p>
        </div>
        <div className="member-card">
          <h2>David Huertas</h2>
          <img src={PicDavid} alt="David Huertas" />
          <p>
          David cuenta con una creatividad excepcional y habilidades comunicativas destacadas.  Su flexibilidad y enfoque proactivo le permiten abordar los desafíos con innovación y resolver problemas de manera eficiente.
          </p>
          <p className="role">Coordinador de Calidad</p>
        </div>
        <div className="member-card">
          <h2>Andrea Chaves</h2>
          <img src={PicAndrea} alt="Andrea Chaves" />
          <p>
          Andrea sobresale por su capacidad para trabajar bajo presión y su facilidad de comunicación. Es una excelente colaboradora en equipo, resolviendo conflictos con eficacia.
          </p>
          <p className="role">Coordinadora de Soporte</p>
        </div>
      </div>
      <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleScrollToServices}>
            Proyectos<FiArrowRight />
          </button>
        </div>
    </div>
  );
};

export default Members;
