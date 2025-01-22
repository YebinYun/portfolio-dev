import "./index.css";
import { INFORMATION_LIST } from "../../constants/informationList";
import { LINK_LIST } from "../../constants/linkList";
import { useState } from "react";
import { Icon } from "@iconify/react";

const SideBarComponent = () => {
  const [active, setActive] = useState(false);

  const hideInformation = () => {
    setActive(!active);
  };

  return (
    <article className="sidebar">
      <div className="profile">
        <button
          onClick={hideInformation}
          className={
            active ? `information-button active` : `information-button`
          }
        >
          <Icon icon="eva:arrow-down-fill" />
        </button>
        <img
          className="profile-image"
          src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
          alt="profile"
        />
        <div className="profile-text">
          <h2 className="profile-name">Yun Yebin</h2>
          <span className="profile-title">Web developer</span>
        </div>
      </div>

      {!active && (
        <>
          <hr className="separator" />
          <ul className="information-list">
            {INFORMATION_LIST.map((list) => (
              <li className="information-item" key={list.title}>
                <img
                  className="information-icon"
                  src={list.icon}
                  alt={list.title}
                />
                <div className="information-wrap">
                  <p className="information-tilte">{list.title} </p>
                  <p className="information-content">{list.content} </p>
                </div>
              </li>
            ))}
          </ul>

          <hr className="separator" />

          <ul className="link-list">
            {LINK_LIST.map((list) => (
              <li className="link-item" key={list.title}>
                <a href={list.link} target="_blank" rel="noreferrer">
                  <Icon className="link-icon" icon={list.icon} />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

export default SideBarComponent;
