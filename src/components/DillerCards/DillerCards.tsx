import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./DillerCards.css"
import { useGameState } from '../../contexts/gameStateContext';

interface DillerCardsProps {
    gameState: GameState | null;
}

function DillerСards(props: DillerCardsProps) {
    const { gameState } = useGameState();

    


    return (
        <div className='diller-cards'>
            {gameState?.dilerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} />
            ))}
        </div>
    )
}

export default DillerСards