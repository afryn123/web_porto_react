import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Afriyan</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/afriyan-pratama-mulani-70728b231"
            title="linkin"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/afryanprtma?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
            title="instagram"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="mailto:afriyanpm15@gmail.com"
            title="email"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-envelope-alt"></i>
          </a>
        </div>
      </div>
      <span className="footer__copy">&#169; Afriyan. All rigths reserved</span>
    </footer>
  );
};

export default Footer;
