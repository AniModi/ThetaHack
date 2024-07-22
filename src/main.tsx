import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@pixi/events";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { GameContextProvider } from "./contexts/GameContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@pixi/react";
import { Application } from "@pixi/app";
import { THETA_LOCAL, CLIENT_ID } from "./utils/constants.ts";
import { CardContextProvider } from "./contexts/CardContext.tsx";

const app = new Application();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider value={app}>
      <BrowserRouter>
        <GameContextProvider>
          <CardContextProvider>
            <ThirdwebProvider activeChain={THETA_LOCAL} clientId={CLIENT_ID}>
              <App />
            </ThirdwebProvider>
          </CardContextProvider>
        </GameContextProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
