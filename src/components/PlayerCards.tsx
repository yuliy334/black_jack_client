import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../types/types';
import Card from './Card';


interface DillerCardsProps {
    gameState: GameState | null;
}

function PlayerCards(props: DillerCardsProps) {
    const gameState = props.gameState;


    return (
        <>
            <h1>Player Cards:</h1>
            <Card rank={String(gameState?.playerCards[0].rank)} suit={String(gameState?.playerCards[0].suit)}></Card>
            <Card rank={String(gameState?.playerCards[1].rank)} suit={String(gameState?.playerCards[1].suit)}></Card>
            <h2>points:{gameState?.playerPoints.value}</h2>
        </>
    )
}

export default PlayerCards