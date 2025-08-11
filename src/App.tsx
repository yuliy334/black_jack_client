import { useState } from 'react'
import './App.css'
import DillerСards from './components/DillerCards'
import PlayerCards from './components/PlayerCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DillerСards></DillerСards>
      <PlayerCards></PlayerCards>
    </div>

  )
}

export default App
