import React, { createContext, useContext, useEffect, useState } from "react";
import type { GameState } from "../types/types";

interface GameStateContextType {
    gameState: GameState | null;
    startGame: () => Promise<void>;
    hit: () => Promise<void>;
    stand: () => Promise<void>;
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameStateContext = createContext<GameStateContextType | null>(null);

export function GameStateProvider({ children }: { children: React.ReactNode }) {
    const [gameState, setGameState] = useState<GameState | null>(() => {
        const saved = localStorage.getItem("gameState");
        return saved ? JSON.parse(saved) as GameState : null;
    });

    const [isGameOver, setIsGameOver] = useState(false);
    useEffect(() => {
        if (gameState) {
            localStorage.setItem("gameState", JSON.stringify(gameState));
        } else {
            localStorage.removeItem("gameState");
        }

        if(gameState?.gameResult!=""){
            setIsGameOver(true);
        }
    }, [gameState]);

    async function startGame() {
        setIsGameOver(false);
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
            setIsGameOver(true);
        } catch {
            setGameState(null);
        }
    }

    return (
        <GameStateContext.Provider value={{ gameState, startGame, hit, stand, isGameOver,setIsGameOver }}>
            {children}
        </GameStateContext.Provider>
    );
}

export function useGameState() {
    const context = useContext(GameStateContext);
    if (!context) throw new Error("error");
    return context;
}

