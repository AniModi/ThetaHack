import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@pixi/events";
import { GameContextProvider } from "./contexts/GameContext.tsx";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { AppProvider } from "@pixi/react";
import { Application } from "@pixi/app";

const app = new Application();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider value={app}>
      <BrowserRouter>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
