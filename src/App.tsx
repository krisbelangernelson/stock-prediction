import { useState, useMemo } from 'react'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import { getMockData } from './utils/generateMockData'
import './App.css'

function App() {
  const [stockSelected, setStockSelected] = useState('')
  const [timeWindow, setTimeWindow] = useState('10')

  const data = useMemo(() => {
    if (!stockSelected) return []
    return getMockData(stockSelected, Number(timeWindow))
  }, [stockSelected, timeWindow])

  return (
    <div className="wrapper">
      <Header />
      <main>
        <StockForm stockSelected={stockSelected} setStockSelected={setStockSelected} timeWindow={timeWindow} setTimeWindow={setTimeWindow} data={data} />
        <StockTable stockSelected={stockSelected} data={data} />
      </main>
    </div>
  )
}

export default App
