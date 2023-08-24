import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/afriyan-pratama-mulani-70728b231"
        title="linkin"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://instagram.com/afryanprtma?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
        title="instagram"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="mailto:afriyanpm15@gmail.com"
        title="email"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope-alt"></i>
      </a>

      <a
        href="https://github.com/afryn123"
        title="github"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://gitlab.com/afriyanpm15"
        title="gitlab"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-gitlab"></i>
      </a>
    </div>
  );
};

export default Social;
