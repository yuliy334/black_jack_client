import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../types/types';
import Card from './Card';

function DillerСards() {
    const [gameState, setGameState] = useState<GameState | null>(null);

    useEffect(() => {
        fetch("http://localhost:9000/games")
            .then(response => response.json())
            .then(json => {
                console.log("2");
                setGameState(json);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <h1>Diller Cards:</h1>
            <Card rank={String(gameState?.dilerCards[0].rank)} suit={String(gameState?.dilerCards[0].suit)}></Card>
            <Card rank={String(gameState?.dilerCards[1].rank)} suit={String(gameState?.dilerCards[1].suit)}></Card>
            <h2>points:{gameState?.playerPoints.value}</h2>
        </>
    )
}

export default DillerСards