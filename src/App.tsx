import { useState } from 'react'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import './App.css'

function App() {
  const [stock, setStock] = useState('')
  const [timeWindow, setTimeWindow] = useState('10')

  return (
    <div className="wrapper">
      <Header />
      <main>
        <StockForm stock={stock} setStock={setStock} timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
        <StockTable stock={stock} timeWindow={timeWindow} />
      </main>
    </div>
  )
}

export default App
