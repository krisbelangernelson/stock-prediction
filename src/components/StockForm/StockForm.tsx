import { Dispatch, SetStateAction } from 'react';
import SocialMediaInfo from './SocialMediaInfo';
import './StockForm.css'
import StockList from './StockList';
import TimeWindow from './TimeWindow';
import companies from "../../mocks/data/companyData"

export interface StockProps {
  setStock: Dispatch<SetStateAction<string>>
  stock: string
}

export interface TimeWindowProps {
  setTimeWindow: Dispatch<SetStateAction<string>>
  timeWindow: string
}

interface StockFormProps extends StockProps, TimeWindowProps { }

export default function StockForm(props: StockFormProps) {
  const { setStock, stock, timeWindow, setTimeWindow } = props
  const company = companies.find((company) => company.symbol === stock)

  return (
    <section className="stock-form">
      <div className="stock-form-content">
        <StockList stock={stock} setStock={setStock} />
        {company && <SocialMediaInfo company={company} />}
        <TimeWindow timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
      </div>
    </section>
  )
}