import React, { useState } from "react";
import "./index.css";
import { PROJECT_LIST } from "../../../constants/projectList";
import { Icon } from "@iconify/react";

const ProjectComponent = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="project">
      <ul className="project-grid">
        {PROJECT_LIST.map((item) => (
          <li
            className={`project-item ${active ? "active" : ""}`}
            key={item.title}
          >
            <div className="image-wrap">
              <img
                src={item.image}
                alt={item.title}
                onLoad={() => setActive(true)}
              />
            </div>

            <div className="description-wrap">
              <p>{item.title}</p>
              <button
                type="button"
                onClick={() => window.open(item.link, "_blank")}
              >
                Git Hub
              </button>
            </div>
            <div className="icon-wrap">
              {item.icon.map((icons, index) => (
                <Icon
                  className="icon"
                  key={index}
                  icon={icons}
                  style={{ transform: `translateX(${-2 + index * -5}px)` }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectComponent;
