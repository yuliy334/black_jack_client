import React from "react";
import { useGameState } from "../../contexts/gameStateContext";
import "./GameButtons.css"

export default function GameButtons() {
  const { gameState, startGame, hit, stand,double } = useGameState();
  const isGame = gameState?.gameResult === "";

  return (
    <div className="buttons">
      {!isGame && <button onClick={startGame}>Start Game</button>}
      {isGame && <button onClick={hit}>Hit</button>}
      {isGame && <button onClick={stand}>Stand</button>}
      {isGame && <button onClick={double}>double</button>}
    </div>
  );
}