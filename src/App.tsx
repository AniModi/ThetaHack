import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import PlayerCreation from "./pages/PlayerCreation/PlayerCreation";
import PlayerDetailPage from "./pages/PlayerDetailPage/PlayerDetailPage";
import CardGame from "./pages/CardGame/CardGame";
import BattlePage from "./pages/BattlePage/BattlePage";
import ThetaHall from "./pages/ThetaHall/ThetaHall";

export default function App() {
  return (
    <div className="h-full w-full bg-blue">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-player" element={<PlayerCreation/>} />
        <Route path="/create-player/:player" element={<PlayerDetailPage/>} />
        <Route path="/play" element={<Game />} />
        <Route path="/play/card" element={<CardGame />} />
        <Route path="/play/card/battle" element={<BattlePage />} />
        <Route path="/theta" element={<ThetaHall />} />
      </Routes>
    </div>
  );
}
