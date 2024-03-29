import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="image" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.git !== "" ? (
        <a href={item.git} className="work__button" target="_blank">
          Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : (
        ""
      )}
      {item.link !== "" ? (
        <a href={item.link} className="work__button" target="_blank">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default WorkItem;
