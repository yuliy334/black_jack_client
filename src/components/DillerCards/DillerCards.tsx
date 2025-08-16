import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./DillerCards.css"

interface DillerCardsProps {
    gameState: GameState | null;
}

function DillerСards(props: DillerCardsProps) {
    const gameState = props.gameState;

    return (
        <div className='diller-cards'>
            {gameState?.dilerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} />
            ))}
            {/* <h2>points:{gameState?.dilerPoints.value}</h2> */}
        </div>
    )
}

export default DillerСards