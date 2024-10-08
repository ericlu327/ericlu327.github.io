import React from "react";
import "./StarBackground.css";

type Coord = { x: number; y: number };

type StarBackgroundProps = {
  starCurrXY: Coord;
  istarEnabled: boolean;
  opacity?: number;
};

const BlobBackground: React.FC<StarBackgroundProps> = (props) => {
  return (
    <section className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {props.istarEnabled && (
        <div
          className="interactive"
          style={{
            transform: `translate(${props.starCurrXY.x}px, ${props.starCurrXY.y}px)`,
            opacity: props.opacity || 0.35,
          }}
        ></div>
      )}
    </section>
  );
};

export default BlobBackground;
