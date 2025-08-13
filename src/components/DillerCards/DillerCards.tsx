import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';

interface DillerCardsProps {
    gameState: GameState | null;
}

function DillerСards(props: DillerCardsProps) {
    const gameState = props.gameState;

    return (
        <>
            <h1>Diller Cards:</h1>
            {gameState?.dilerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} />
            ))}
            <h2>points:{gameState?.dilerPoints.value}</h2>
        </>
    )
}

export default DillerСards