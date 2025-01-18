import "./index.css";
import { INFORMATION_LIST } from "../../constants/informationList";
import { LINK_LIST } from "../../constants/linkList";

const SideBarComponent = () => {
  return (
    <article className="sidebar">
      <div className="profile">
        <img
          className="profileImage"
          src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
          alt="profile"
        />
        <h2 className="profileName">Yun Yebin</h2>
        <span className="profileTitle">Web developer</span>
      </div>

      <ul className="informationList">
        {INFORMATION_LIST.map((list) => (
          <li className="informationItem" key={list.title}>
            <img className="informationIcon" src={list.icon} alt={list.title} />
            <div className="informationWrap">
              <p className="informationTilte">{list.title} </p>
              <p className="informationContent">{list.content} </p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="linkList">
        {LINK_LIST.map((list) => (
          <li className="linkItem" key={list.title}>
            <a href={list.link} target="_blank" rel="noreferrer">
              <img className="linkIcon" src={list.icon} alt={list.title} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SideBarComponent;
