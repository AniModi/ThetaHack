import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@pixi/events";
import { GameContextProvider } from "./contexts/GameContext.tsx";
import { MemoryRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </MemoryRouter>
  </React.StrictMode>
);
