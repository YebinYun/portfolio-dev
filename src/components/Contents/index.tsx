import React, { ReactElement } from "react";

interface MainContentProps {
  isSection: ReactElement;
}

const MainContentComponent = ({ isSection }: MainContentProps) => (
  <article>
    <div>{isSection}</div>
  </article>
);

export default MainContentComponent;
