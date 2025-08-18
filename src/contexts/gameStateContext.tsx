import React, { createContext, useContext, useState } from "react";
import type { GameState } from "../types/types";

interface GameStateContextType {
    gameState: GameState | null;
    startGame: () => Promise<void>;
    hit: () => Promise<void>;
    stand: () => Promise<void>;
}

export const GameStateContext = createContext<GameStateContextType | null>(null);

export function GameStateProvider({ children }: { children: React.ReactNode }) {
    const [gameState, setGameState] = useState<GameState | null>(null);

     async function startGame() {
    try {
      const res = await fetch("http://localhost:9000/games");
      const state: GameState = await res.json();
      setGameState(state);
    } catch {
      setGameState(null);
    }
  }

  async function hit() {
    try {
      const res = await fetch("http://localhost:9000/games/hit");
      const state: GameState = await res.json();
      setGameState(state);
    } catch {
      setGameState(null);
    }
  }

  async function stand() {
    try {
      const res = await fetch("http://localhost:9000/games/stand");
      const state: GameState = await res.json();
      setGameState(state);
    } catch {
      setGameState(null);
    }
  }

    return (
        <GameStateContext.Provider value={{ gameState, startGame, hit, stand }}>
            {children}
        </GameStateContext.Provider>
    );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) throw new Error("error");
  return context;
}