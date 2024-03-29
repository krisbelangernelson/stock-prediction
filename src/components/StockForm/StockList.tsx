import StockListItem from "./StockListItem"
import { StockListProps } from "@/types/stock"
import MinusIcon from "@/components/shared/MinusIcon"

export default function StockList(props: StockListProps) {
  const { setStockSelected, stockSelected, companies, handleRemoveCompany } = props
  return (
    <div className="stock-list">
      <div className="stock-list-items">
        {companies.map((company) => (
          <div key={company.name} className="items-row">
            <div onClick={() => { handleRemoveCompany(company.name) }}>
              <MinusIcon width="16px" height="16px" />
            </div>
            <StockListItem key={company.symbol} stockSelected={stockSelected} setStockSelected={setStockSelected} symbol={company.symbol} />
          </div>
        ))}
      </div>
    </div>
  )
}
