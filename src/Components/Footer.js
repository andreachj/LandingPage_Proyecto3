import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <><div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Lambda & Omega Operations Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Teléfono: 2243-2022</span>
          <span>Email: lambdaomega@gmail.com</span>
          <span>Dirección: Avenida 30, Calle 24, San José, Costa Rica</span>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Lambda & Omega Operations. Todos los derechos reservados.</p>
    </div></>
  );
};

export default Footer;
