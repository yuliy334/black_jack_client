import React, { useState } from "react";
import { useGameState } from "../../contexts/gameStateContext";
import "./EndGame.css"

function GameButtons() {
  const { gameState } = useGameState();
  const isGame: string | undefined = gameState?.gameResult;
  console.log(gameState?.gameResult.toString());
  return (
    <div className="end-game">
      <span className={gameState?.gameResult.toString()}>
        {isGame}
      </span>
    </div>
  );
}

export default GameButtons;