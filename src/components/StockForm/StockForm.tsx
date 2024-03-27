import SocialMediaInfo from './SocialMediaInfo';
import './StockForm.css'
import StockList from './StockList';
import TimeWindow from './TimeWindow';

export default function StockForm() {
  return (
    <div className="stock-form">
      <div className="stock-form-content">
        <StockList />
        <SocialMediaInfo />
        <TimeWindow />
      </div>
    </div>
  )
}