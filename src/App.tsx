import { useEffect, useState } from 'react'
import './App.css'
import DillerСards from './components/DillerCards/DillerCards'
import PlayerCards from './components/PlayerCards/PlayerCards'
import type { GameState } from './types/types';
import { hit as ApiHit, stand as ApiStand, StartGame as ApiStartGame } from './api/blackJackApi';
import Card from './components/Card/Card';
import GameTable from './components/GameTable/GameTable';
import Deck from './components/Deck/Deck';
import { GameStateContext, GameStateProvider } from './contexts/gameStateContext';
import GameButtons from './components/GameButtons/GameButtons';







function App() {
  

  return (
    <GameStateProvider>
      <div className='App'>
        <GameTable></GameTable>

        <GameButtons></GameButtons>


      </div>
    </GameStateProvider>

  )
}



export default App
