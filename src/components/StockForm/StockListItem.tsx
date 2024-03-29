import { StockListItemProps } from "@/types/stock"

export default function StockListItem(props: StockListItemProps) {
  const { setStockSelected, stockSelected, symbol } = props

  return (
    <div className="item">
      <input type="radio" id={symbol} name="stockPick" value={symbol} onChange={(e) => setStockSelected(e.target.value)} checked={stockSelected === symbol} />
      <label htmlFor={symbol}>{symbol}</label>
    </div>
  )
}
