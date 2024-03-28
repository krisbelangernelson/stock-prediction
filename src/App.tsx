import { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import { getMockData } from './utils/generateMockData'
import './App.css'

type Data = {
  [x: string]: {
    date: string;
    price: number;
    socialMediaCount: number;
  }[]
}


function App() {
  const [stock, setStock] = useState('')
  const [timeWindow, setTimeWindow] = useState('10')

  const data = useMemo(() => {
    if (!stock || !timeWindow) return []
    return getMockData(stock, Number(timeWindow))
  }, [stock, timeWindow]) as Data

  console.log('data', data)
  console.log('stock', stock)
  console.log('timeWindow', timeWindow)

  return (
    <div className="wrapper">
      <Header />
      <main>
        <StockForm stock={stock} setStock={setStock} timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
        <StockTable />
      </main>
    </div>
  )
}

export default App
