import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [Active, setActive] = useState("");
  const scrollHandler = () => {
    let section = document.querySelectorAll("section");
    let nav = document.querySelectorAll(".nav__link");
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        nav.forEach((nav) => {
          setActive(
            document.querySelector("a[href*=" + id + "]").getAttribute("href")
          );
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  //

  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          Afriyan
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  Active === "#home" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  Active === "#about" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  Active === "#skills" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                className={
                  Active === "#qualification" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-book-reader nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#project"
                className={
                  Active === "#project" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  Active === "#contact" ? "nav__link active" : "nav__link"
                }
                onClick={() => setToggle(!Toggle)}
              >
                <i className="uil uil-envelope-edit nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
