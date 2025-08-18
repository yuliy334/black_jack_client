import { useEffect, useState } from 'react'
import type { GameState, Suit } from '../../types/types';
import Card from '../Card/Card';
import "./PlayerCards.css"
import { useGameState } from '../../contexts/gameStateContext';


function PlayerCards() {
    const { gameState } = useGameState();

    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        if (!gameState?.playerCards) return;

        gameState.playerCards.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, index * 200 + 100);
        });

    }, [gameState?.playerCards]);
    const [isStart, setIsStart] = useState<boolean>(true);
    useEffect(() => {
        if (gameState?.gameResult != "") {
            setIsStart(true);
        }
        else if (isStart == true) {
            setIsStart(false);
            setVisibleCards([]);
        }

    }, [gameState?.gameResult])

    return (
        <>
            <div className='player-cards'>
                {gameState?.playerCards.map((item, index) => (

                    <Card key={index} rank={String(item.rank)} suit={String(item.suit)} inversed={false} className={visibleCards.includes(index) ? "card-animate" : "card-hidden"} />
                ))}
            </div>
            <div className='player-points'>{gameState?.playerPoints.value}</div>
        </>
    )
}

export default PlayerCards