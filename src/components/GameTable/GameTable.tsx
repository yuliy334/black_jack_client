import './GameTable.css';
import DillerСards from '../DillerCards/DillerCards';
import PlayerCards from '../PlayerCards/PlayerCards';
import Deck from '../Deck/Deck';
import { useGameState } from '../../contexts/gameStateContext';


function GameTable() {
    const { gameState } = useGameState();
    return (
        <div className='game-table'>
            <DillerСards></DillerСards>
            <Deck gameState={gameState}></Deck>
            <PlayerCards></PlayerCards>
        </div>
    )
}

export default GameTable