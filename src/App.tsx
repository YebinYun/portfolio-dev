import React, { ReactElement, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import About from "./components/Contents/About/index";
import Project from "./components/Contents/Project/index";
import Resume from "./components/Contents/Resume/index";
import Contact from "./components/Contents/Contact/index";
import MainContent from "./components/Contents/index";
import Sidebar from "./components/Sidebar/index";

export interface SectionProps {
  title: string;
  component: ReactElement;
}

const App: React.FC = () => {
  const sections: SectionProps[] = [
    {
      title: "About",
      component: <About />,
    },
    {
      title: "Project",
      component: <Project />,
    },
    {
      title: "Resume",
      component: <Resume />,
    },
    {
      title: "Contact",
      component: <Contact />,
    },
  ];

  const [isSection, setIsSection] = useState<SectionProps>({
    title: sections[0].title,
    component: sections[0].component,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isSection]);

  return (
    <div className="app">
      <Navbar setIsSection={setIsSection} sections={sections} />
      <main>
        <Sidebar />
        <MainContent isSection={isSection} />
      </main>
    </div>
  );
};

export default App;
