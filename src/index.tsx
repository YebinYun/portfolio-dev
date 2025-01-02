import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function getRandomValue(max: number): number {
  return Math.floor(Math.random() * max);
}

const styles = ["style1", "style2", "style3"];
const opacities = ["opacity1", "opacity2", "opacity3"];
const twinkles = ["twinkle1", "twinkle2", "twinkle3", "twinkle4"];

const Star: React.FC = () => {
  const _s = getRandomValue(styles.length);
  const _o = getRandomValue(opacities.length);
  const _t = getRandomValue(twinkles.length);
  const x = getRandomValue(windowWidth);
  const y = getRandomValue(windowHeight);

  const className = `star ${styles[_s]} ${opacities[_o]} ${twinkles[_t]}`;

  return (
    <div
      className={className}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="background">
      {Array.from({ length: 100 }).map((_, index) => (
        <Star key={index} />
      ))}
    </div>
    <App />
  </React.StrictMode>
);
