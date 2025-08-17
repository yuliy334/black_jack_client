import { useEffect, useState } from 'react';
import './GameTable.css';
import Card from '../Card/Card';
import DillerСards from '../DillerCards/DillerCards';
import type { GameState, Suit } from '../../types/types';
import PlayerCards from '../PlayerCards/PlayerCards';
import Deck from '../Deck/Deck';

interface GameStateProps {
    gameState: GameState | null;
}

function GameTable(props: GameStateProps) {
    return (
        <div className='game-table'>
            <DillerСards gameState={props.gameState}></DillerСards>
            <Deck></Deck>
            <PlayerCards gameState={props.gameState}></PlayerCards>
        </div>
    )
}

export default GameTable