import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./DillerCards.css"
import { useGameState } from '../../contexts/gameStateContext';

function DillerСards() {
    const { gameState, isGameOver } = useGameState();

    


    return (
        <div className='diller-cards'>
            {gameState?.dilerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} inversed={(index !== gameState.dilerCards.length-1)&&!isGameOver} />
            ))}
        </div>
    )
}

export default DillerСards