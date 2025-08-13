import type { GameState } from "../types/types";

async function StartGame(): Promise<GameState | null> {

    try {
        const gameStateJson = await fetch("http://localhost:9000/games")
        const gameState: GameState = await gameStateJson.json();
        return gameState;
    }
    catch{
        return null;
    }

}

async function hit():Promise<GameState | null> {

    try {
        const gameStateJson = await fetch("http://localhost:9000/games/hit")
        const gameState: GameState = await gameStateJson.json();
        return gameState;
    }
    catch{
        return null;
    }
}
async function stand(): Promise<GameState | null> {

    try {
        const gameStateJson = await fetch("http://localhost:9000/games/stand")
        const gameState: GameState = await gameStateJson.json();
        return gameState;
    }
    catch{
        return null;
    }
}

export { StartGame, hit, stand };