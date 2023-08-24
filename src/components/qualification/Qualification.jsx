import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="section qualification" id="qualification">
      <h3 className="section__title">Qualification</h3>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Information System</h3>
                <span className="qualification__subtitle">
                  UPN Veteran Jakarta
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Sep 2018 - Jan 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Fullstack Web Developer
                </h3>
                <span className="qualification__subtitle">Binar Academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Feb 2012 - Agust 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">
                  Cognoscenti Consulting Group
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Feb 2023 - Agust 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">Amati Indonesia</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Mar 2022 - Jul 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
