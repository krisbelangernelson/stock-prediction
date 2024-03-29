import StockListItem from "./StockListItem"
import { StockListProps } from "../../types/stock"
import MinusIcon from "../../assets/icons/minus-circle-1442.svg?react"

export default function StockList(props: StockListProps) {
  const { setStockSelected, stockSelected, companies, handleRemoveCompany } = props
  return (
    <div className="stock-list">
      <div className="stock-list-items">
        {companies.map((company) => (
          <div key={company.name} className="items-row">
            <div onClick={() => { handleRemoveCompany(company.name) }}>
              <MinusIcon height="16px" width="16px" />
            </div>
            <StockListItem key={company.symbol} stockSelected={stockSelected} setStockSelected={setStockSelected} symbol={company.symbol} />
          </div>
        ))}
      </div>
    </div>
  )
}
