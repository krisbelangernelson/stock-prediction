import { useMemo, useState } from 'react'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'
import { getMockData } from './utils/generateMockData'
import './App.css'


function App() {
  const [stock, setStock] = useState('')
  const data = useMemo(() => getMockData(stock, 10), [stock])

  console.log('data', data)
  console.log('stock', stock)
  return (
    <div className="wrapper">
      <Header />
      <main>
        <StockForm stock={stock} setStock={setStock} />
        <StockTable />
      </main>
    </div>
  )
}

export default App
