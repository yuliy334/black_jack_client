import { useEffect, useState } from 'react'
import './App.css'
import DillerСards from './components/DillerCards'
import PlayerCards from './components/PlayerCards'
import type { GameState } from './types/types';







function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);

  function StartGame() {

    fetch("http://localhost:9000/games")
      .then(response => response.json())
      .then(json => {
        setGameState(json);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function hit() {

    fetch("http://localhost:9000/games/hit")
      .then(response => response.json())
      .then(json => {
        setGameState(json);
      })
      .catch(error => {
        console.error(error);
      });
  }
  function stand() {

    fetch("http://localhost:9000/games/stand")
      .then(response => response.json())
      .then(json => {
        setGameState(json);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <DillerСards gameState={gameState}></DillerСards>
      <PlayerCards gameState={gameState}></PlayerCards>
      <h2>Game result: {gameState?.gameResult}</h2>
      <button onClick={StartGame}>StartGame</button>
      <button onClick={hit}>Hit</button>
      <button onClick={stand}>Stand</button>
    </>

  )
}



export default App
