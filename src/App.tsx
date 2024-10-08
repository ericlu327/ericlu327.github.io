import React, { useEffect, useState } from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFoundScreen from "./screens/PageNotFoundScreen/PageNotFoundScreen";
import { Coord } from "./types";

function App() {
  const interactiveStarIsEnabled = false;

  const [targetXY, setTargetXY] = useState<Coord>({
    x: 0,
    y: 0,
  });
  const [starCurrXY, setStarCurrXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (interactiveStarIsEnabled) {
      const update = (e: any) => {
        const { clientX, clientY } = e.touches ? e.touches[0] : e;
        setTargetXY({ x: clientX, y: clientY });
      };
      window.addEventListener("mousemove", update);
      window.addEventListener("touchmove", update);
      return () => {
        window.removeEventListener("mousemove", update);
        window.removeEventListener("touchmove", update);
      };
    }
  }, [interactiveStarIsEnabled]);

  const moveInteractiveStar = () => {
    const newX = starCurrXY.x + (targetXY.x - starCurrXY.x) / 10;
    const newY = starCurrXY.y + (targetXY.y - starCurrXY.y) / 10;
    setStarCurrXY({ x: newX, y: newY });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingScreen
                interactiveStarIsEnabled={interactiveStarIsEnabled}
                moveInteractiveStar={moveInteractiveStar}
                starCurrXY={starCurrXY}
              />
            }
          />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
