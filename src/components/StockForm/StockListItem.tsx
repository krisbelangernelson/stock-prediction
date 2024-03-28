import { StockProps } from "./StockForm"

interface StockListProps extends StockProps {
  symbol: string
}

export default function StockListItem(props: StockListProps) {
  const { setStock, stock, symbol } = props

  return (
    <div className="stock-list-item">
      <input type="radio" id={symbol} name="stockPick" value={symbol} onChange={(e) => setStock(e.target.value)} checked={stock === symbol} />
      <label htmlFor={symbol}>{symbol}</label>
    </div>
  )
}
