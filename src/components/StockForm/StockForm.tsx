import { Dispatch, SetStateAction } from 'react';
import SocialMediaInfo from './SocialMediaInfo';
import './StockForm.css'
import StockList from './StockList';
import TimeWindow from './TimeWindow';

export interface StockFormProps {
  setStock: Dispatch<SetStateAction<string>>
  stock: string
}

export default function StockForm(props: StockFormProps) {
  const { setStock, stock } = props

  return (
    <section className="stock-form">
      <div className="stock-form-content">
        <StockList stock={stock} setStock={setStock} />
        <SocialMediaInfo />
        <TimeWindow />
      </div>
    </section>
  )
}