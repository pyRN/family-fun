import { useRef, useState } from "react";

//Components
import Footer from "../Footer";
import PlayersDashboard from "./PlayersDashboard";
import Gameboard from "./Gameboard";
import GameDashboard from "./GameDashboard";

const TicTacToeContainer = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="text-center">Tic Tac Toe</h1>
      </div>

      <div className="games-container">
        <PlayersDashboard />
        <Gameboard />
        <GameDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default TicTacToeContainer;
