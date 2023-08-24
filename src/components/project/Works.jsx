import React, { useEffect, useState } from "react";
import { projectData, projectNav } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  const [seletedItem, setSeletedItem] = useState({ name: "all" });
  const [project, setProject] = useState([]);
  useEffect(() => {
    if (seletedItem.name === "all") {
      setProject(projectData);
    } else {
      const newProjects = projectData.filter(
        (project) => project.category === seletedItem.name
      );
      setProject(newProjects);
    }
  }, [seletedItem]);
  return (
    <div>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span
              className={
                seletedItem.name === item.name
                  ? "work__item work__item-active"
                  : "work__item"
              }
              key={index}
              onClick={() => setSeletedItem({ name: item.name })}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {project.map((item, index) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
