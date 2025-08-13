import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';


interface DillerCardsProps {
    gameState: GameState | null;
}

function PlayerCards(props: DillerCardsProps) {
    const gameState = props.gameState;


    return (
        <>
            <h1>Player Cards:</h1>
            {gameState?.playerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} />
            ))}
            <h2>points:{gameState?.playerPoints.value}</h2>
        </>
    )
}

export default PlayerCards