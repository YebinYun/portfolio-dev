import React, { Dispatch, SetStateAction, useState } from "react";
import { SectionProps } from "../../App";
import "./index.css";

type NavbarProps = {
  setIsSection: Dispatch<SetStateAction<SectionProps>>;
  sections: SectionProps[];
};

const NavbarComponent = ({ setIsSection, sections }: NavbarProps) => {
  const [activeButton, setActiveButton] = useState(sections[0].title);

  const changeHandler = (newActiveButton: string) => {
    setActiveButton(newActiveButton);
    const selectedSection = sections.find(
      (button) => button.title === newActiveButton
    );
    setIsSection(
      selectedSection
        ? {
            title: selectedSection.title,
            component: selectedSection.component,
          }
        : {
            title: "",
            component: <></>,
          }
    );
  };

  return (
    <nav className="navbar">
      <ul>
        {sections.map((headerButton) => (
          <li
            key={headerButton.title}
            className={activeButton === headerButton.title ? "active" : ""}
            onClick={() => changeHandler(headerButton.title)}
          >
            {headerButton.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
