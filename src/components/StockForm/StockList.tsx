import { StockProps } from "./StockForm"
import StockListItem from "./StockListItem"
import companies from "../../mocks/data/companyData"

interface StockListProps extends StockProps { }

export default function StockList(props: StockListProps) {
  const { setStock, stock } = props
  return (
    <div className="stock-list">
      <div className="stock-list-items">
        {companies.map((company) => <StockListItem key={company.symbol} stock={stock} setStock={setStock} symbol={company.symbol} />)}
      </div>
    </div>
  )
}
