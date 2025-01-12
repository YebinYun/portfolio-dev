import React from "react";
import "./index.css";
import { PROJECT_LIST } from "../../../constants/projectList";

const ProjectComponent = () => {
  return (
    <article>
      <section className="projectGrid">
        {PROJECT_LIST.map((item) => (
          <div className="projectItem" key={item.title}>
            {/* <img src={item.image} alt={item.title} /> */}
            <p>{item.title}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default ProjectComponent;
