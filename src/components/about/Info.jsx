import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-hard-hat"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 years Bootcamp + Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-award"></i>
        <h3 className="about__title">Sertificate</h3>
        <span className="about__subtitle">8+ Sertificate</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
