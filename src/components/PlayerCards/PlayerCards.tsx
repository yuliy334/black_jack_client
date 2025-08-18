import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./PlayerCards.css"
import { useGameState } from '../../contexts/gameStateContext';


function PlayerCards() {
    const { gameState } = useGameState();

    

    return (
        <>
            <div className='player-cards'>
                {gameState?.playerCards.map((item, index) => (
                    
                    <Card key={index} rank={String(item.rank)} suit={String(item.suit)} inversed = {false}/>
                ))}
            </div>
            <div className='player-points'>{gameState?.playerPoints.value}</div>
        </>
    )
}

export default PlayerCards