import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../types/types';
import Card from './Card';

interface DillerCardsProps {
  gameState: GameState | null;
}

function DillerСards(props:DillerCardsProps) {
    const gameState = props.gameState;

    return (
        <>
            <h1>Diller Cards:</h1>
            <Card rank={String(gameState?.dilerCards[0].rank)} suit={String(gameState?.dilerCards[0].suit)}></Card>
            <Card rank={String(gameState?.dilerCards[1].rank)} suit={String(gameState?.dilerCards[1].suit)}></Card>
            <h2>points:{gameState?.dilerPoints.value}</h2>
        </>
    )
}

export default DillerСards