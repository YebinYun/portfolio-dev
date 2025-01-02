import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { SectionProps } from "../../App";
import "./index.css";

type NavbarProps = {
  setIsSection: Dispatch<SetStateAction<ReactElement>>;
  sections: SectionProps[];
};

const NavbarComponent = ({ setIsSection, sections }: NavbarProps) => {
  const [activeButton, setActiveButton] = useState(sections[0].name);

  const changeHandler = (newActiveButton: string) => {
    setActiveButton(newActiveButton);
    const selectedSection = sections.find(
      (button) => button.name === newActiveButton
    );
    setIsSection(selectedSection ? selectedSection.component : <></>);
  };

  return (
    <nav className="navbar">
      <ul>
        {sections.map((headerButton) => (
          <li
            key={headerButton.name}
            className={activeButton === headerButton.name ? "active" : ""}
            onClick={() => changeHandler(headerButton.name)}
          >
            {headerButton.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
