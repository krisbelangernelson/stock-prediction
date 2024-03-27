import './App.css'
import Header from './components/Header'
import StockForm from './components/StockForm'
import StockTable from './components/StockTable'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <StockForm />
        <StockTable />
      </main>
    </div>
  )
}

export default App
