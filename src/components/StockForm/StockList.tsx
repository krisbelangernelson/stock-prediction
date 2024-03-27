import { ChangeEvent, useState } from 'react'

export default function StockList() {
  const [radioStock, setRadioStock] = useState('')

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioStock(e.target.value);
  };

  return (
    <div className="stock-list">
      <div className="stock-list-items">
        <div className="stock-list-item">
          <input type="radio" id="meta" name="stockPick" value="meta" onChange={onChangeRadio} checked={radioStock === 'meta'} />
          <label htmlFor="meta">META</label>
        </div>
        <div className="stock-list-item">
          <input type="radio" id="twitter" name="stockPick" value="twitter" onChange={onChangeRadio} checked={radioStock === 'twitter'} />
          <label htmlFor="twitter">TWTR</label>
        </div>
      </div>

    </div>
  )
}