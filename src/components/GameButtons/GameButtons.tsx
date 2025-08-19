import React from "react";
import { useGameState } from "../../contexts/gameStateContext";
import "./GameButtons.css"

export default function GameButtons() {
  const { gameState, startGame, hit, stand, double } = useGameState();
  const isGame = gameState?.gameResult === "";

  return (
    <div className="buttons">
      {!isGame && <button className="start-button" onClick={startGame}>Start Game</button>}

      {isGame && <button className="hit-button"  onClick={hit}>Hit</button>}
      {isGame && <button className="stand-button" onClick={stand}>Stand</button>}
      {isGame && <button className="double-button" onClick={double}>double</button>}
    </div>
  );
}