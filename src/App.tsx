import { useEffect, useState } from 'react'
import './App.css'
import DillerСards from './components/DillerCards/DillerCards'
import PlayerCards from './components/PlayerCards/PlayerCards'
import type { GameState } from './types/types';
import { hit as ApiHit, stand as ApiStand, StartGame as ApiStartGame } from './api/blackJackApi';
import Card from './components/Card/Card';
import GameTable from './components/GameTable/GameTable';







function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isGame, setIsGame] = useState(false);
  const [endGame, setEndGame] = useState(false);

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

    })

  }

  return (
    <div className='App'>

      {isGame&&<DillerСards gameState={gameState}></DillerСards>}
      {isGame&&<PlayerCards gameState={gameState}></PlayerCards>}

      {isGame&&<h2>Game result: {gameState?.gameResult}</h2>}
      <button onClick={StartGame}>StartGame</button>
      {!endGame&&isGame&&<button onClick={hit}>Hit</button>}
      {!endGame&&isGame&&<button onClick={stand}>Stand</button>}

    </div>

  )
}



export default App
