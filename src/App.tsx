import React, { ReactElement, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import About from "./components/Contents/About/index";
import Project from "./components/Contents/Project/index";
import Resume from "./components/Contents/Resume/index";
import Contact from "./components/Contents/Contact/index";
import MainContent from "./components/Contents/index";
import Sidebar from "./components/Sidebar/index";

export interface SectionProps {
  name: string;
  component: ReactElement;
}

const App: React.FC = () => {
  const sections: SectionProps[] = [
    {
      name: "About",
      component: <About />,
    },
    {
      name: "Project",
      component: <Project />,
    },
    {
      name: "Resume",
      component: <Resume />,
    },
    {
      name: "Contact",
      component: <Contact />,
    },
  ];

  const [isSection, setIsSection] = useState<ReactElement>(
    sections[0].component
  );

  return (
    <div className="App">
      <Navbar setIsSection={setIsSection} sections={sections} />
      <main>
        <Sidebar />
        <MainContent isSection={isSection} />
      </main>
    </div>
  );
};

export default App;
