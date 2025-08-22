import { useEffect, useState } from 'react'
import Card from '../Card/Card';
import "./DillerCards.css"
import { useGameState } from '../../contexts/gameStateContext';
import dillerPoints from './DillerCardsPoints';

function DillerСards() {
    const { gameState, isGameOver } = useGameState();

    const [visibleCards, setVisibleCards] = useState<number[]>([]);



    useEffect(() => {
        if (!gameState?.dilerCards) return;

        gameState.dilerCards.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, index * 200 + 100);
        });

    }, [gameState?.dilerCards]);
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
            <div className='diller-points'>{!isGameOver? dillerPoints(gameState?.dilerCards.at(1)?.rank.toString()) :gameState?.dilerPoints.value}</div>
            <div className='diller-cards'>
                {gameState?.dilerCards.map((item, index) => (
                    <Card key={index} rank={String(item.rank)} suit={String(item.suit)} inversed={(index !== gameState.dilerCards.length - 1) && !isGameOver} className={visibleCards.includes(index) ? "card-animate" : "card-hidden-diller"} isFirstDiller = {index == (0)? "isFirstDiller":""} />
                ))}
            </div>
        </>
    )
}

export default DillerСards