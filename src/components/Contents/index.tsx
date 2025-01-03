import "./index.css";
import { SectionProps } from "../../App";

interface MainContentProps {
  isSection: SectionProps;
}

const MainContentComponent = ({ isSection }: MainContentProps) => (
  <article className="contents">
    <p className="contentTitle">
      {isSection.title === "About" ? "About Me" : isSection.title}
    </p>
    <div className="contentComponent">{isSection.component}</div>
  </article>
);

export default MainContentComponent;
