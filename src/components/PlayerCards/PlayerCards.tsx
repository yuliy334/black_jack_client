import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./PlayerCards.css"


interface DillerCardsProps {
    gameState: GameState | null;
}

function PlayerCards(props: DillerCardsProps) {
    const gameState = props.gameState;


    return (
        <div className='player-cards'>
            {gameState?.playerCards.map((item, index) => (
                <Card key={index} rank={String(item.rank)} suit={String(item.suit)} />
            ))}
            {/* <h2>points:{gameState?.playerPoints.value}</h2> */}
        </div>
    )
}

export default PlayerCards