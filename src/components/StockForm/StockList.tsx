import StockListItem from "./StockListItem"
import companies from "../../mocks/data/companyData"
import { StockListProps } from "../../types/stock"



export default function StockList(props: StockListProps) {
  const { setStockSelected, stockSelected } = props
  return (
    <div className="stock-list">
      <div className="stock-list-items">
        {companies.map((company) => <StockListItem key={company.symbol} stockSelected={stockSelected} setStockSelected={setStockSelected} symbol={company.symbol} />)}
      </div>
    </div>
  )
}
