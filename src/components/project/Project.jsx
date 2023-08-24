import React from "react";
import "./Project.css";
import Works from "./Works";

const Project = () => {
  return (
    <section className="section project" id="project">
      <h3 className="section__title">Portfolio</h3>
      <span className="section__subtitle">My project</span>

      <Works />
    </section>
  );
};

export default Project;
