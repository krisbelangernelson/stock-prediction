import { StockFormProps } from "./StockForm"

interface StockListProps extends StockFormProps { }

export default function StockList(props: StockListProps) {
  const { setStock, stock } = props

  return (
    <div className="stock-list">
      <div className="stock-list-items">
        <div className="stock-list-item">
          <input type="radio" id="meta" name="stockPick" value="meta" onChange={(e) => setStock(e.target.value)} checked={stock === 'meta'} />
          <label htmlFor="meta">META</label>
        </div>
        <div className="stock-list-item">
          <input type="radio" id="twitter" name="stockPick" value="twitter" onChange={(e) => setStock(e.target.value)} checked={stock === 'twitter'} />
          <label htmlFor="twitter">TWTR</label>
        </div>
      </div>

    </div>
  )
}


// youtube
// instagram
// tiktok
// x/twitter