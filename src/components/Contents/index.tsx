import "./index.css";
import { SectionProps } from "../../App";

interface MainContentProps {
  isSection: SectionProps;
}

const MainContentComponent = ({ isSection }: MainContentProps) => (
  <article className="contents">
    <h2 className="contentTitle">
      {isSection.title === "About" ? "About Me" : isSection.title}
    </h2>
    <div className="contentComponent">{isSection.component}</div>
  </article>
);

export default MainContentComponent;
