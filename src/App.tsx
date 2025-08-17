import { useEffect, useState } from 'react'
import './App.css'
import DillerСards from './components/DillerCards/DillerCards'
import PlayerCards from './components/PlayerCards/PlayerCards'
import type { GameState } from './types/types';
import { hit as ApiHit, stand as ApiStand, StartGame as ApiStartGame } from './api/blackJackApi';
import Card from './components/Card/Card';
import GameTable from './components/GameTable/GameTable';
import Deck from './components/Deck/Deck';







function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isGame, setIsGame] = useState(false);
  const [endGame, setEndGame] = useState(false);


  useEffect(() => {
    if (gameState?.gameResult !== "") {
      console.log("Игра закончена:", gameState);
      setIsGame(false);
    }
  }, [gameState]);

  function StartGame() {
    ApiStartGame().then(state => {

      setEndGame(false);
      setGameState(state);
      setIsGame(true);
    })
  }

  function hit() {

    ApiHit().then(state => {
      setGameState(state);
    })
  }
  function stand() {

    ApiStand().then(state => {
      setGameState(state);
      setEndGame(true);
      setIsGame(false);

    })

  }

  return (
    <div className='App'>
      <GameTable gameState={gameState}></GameTable>
      <div className='buttons'>
        {!isGame && <button className="start_button" onClick={StartGame}>StartGame</button>}
        {isGame && <button className="start_button" onClick={hit}>Hit</button>}
        {isGame && <button className="start_button" onClick={stand}>Stand</button>}
      </div>



    </div>

  )
}



export default App
