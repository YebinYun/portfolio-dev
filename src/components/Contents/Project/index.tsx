import React from "react";
import "./index.css";
import { PROJECT_LIST } from "../../../constants/projectList";

const ProjectComponent = () => {
  return (
    <article className="project">
      <section className="projectGrid">
        {PROJECT_LIST.map((item) => (
          <div className="projectItem" key={item.title}>
            <div className="imageWrap">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default ProjectComponent;
