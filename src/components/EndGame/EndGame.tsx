import React, { useState } from "react";
import { useGameState } from "../../contexts/gameStateContext";

function GameButtons() {
  const { gameState } = useGameState();
  const isGame:string|undefined = gameState?.gameResult;

  return (
    <div>
        {isGame}
    </div>
  );
}

export default GameButtons;