
import SocialMediaInfo from './SocialMediaInfo';
import './StockForm.css'
import StockList from './StockList';
import TimeWindow from './TimeWindow';
import companies from '../../mocks/data/companyData'
import { StockFormProps } from '../../types/stock';

export default function StockForm(props: StockFormProps) {
  const { setStockSelected, stockSelected, timeWindow, setTimeWindow } = props
  const company = companies.find((company) => company.symbol === stockSelected)

  return (
    <section className="stock-form">
      <div className="stock-form-content">
        <StockList stockSelected={stockSelected} setStockSelected={setStockSelected} />
        {company ? <TimeWindow timeWindow={timeWindow} setTimeWindow={setTimeWindow} /> : <div />}
        {company ? <SocialMediaInfo company={company} /> : <h2>Select a social media stock</h2>}
      </div>
    </section>
  )
}