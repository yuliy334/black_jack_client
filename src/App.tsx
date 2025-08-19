import './App.css'
import GameTable from './components/GameTable/GameTable';
import { GameStateContext, GameStateProvider } from './contexts/gameStateContext';
import GameButtons from './components/GameButtons/GameButtons';
import EndGame from './components/EndGame/EndGame';







function App() {
  

  return (
    <GameStateProvider>
      <div className='App'>
        <GameTable></GameTable>
        <EndGame></EndGame>
        <GameButtons></GameButtons>


      </div>
    </GameStateProvider>

  )
}



export default App
