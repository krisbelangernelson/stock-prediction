import { useMemo } from 'react'
import { getMockData } from '../../utils/generateMockData'
import recommendationRating from '../../utils/recommendationRating'
import './StockTable.css'

interface StockTableProps {
  stock: string
  timeWindow: string
}

export default function StockTable(props: StockTableProps) {
  const { stock, timeWindow } = props

  const data = useMemo(() => {
    if (!stock || !timeWindow) return []
    return getMockData(stock, Number(timeWindow))
  }, [stock, timeWindow])

  if (!stock) return null
  return (
    <div className="stock-table-container">
      <div className="stock-table-content">
        <h2>Recommendations for {stock}</h2>
        <div className="table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Price</th>
                <th>Social Posts</th>
                <th>Rating</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ date, price, socialMediaCount }) => (
                <tr key={price}>
                  <td>{price}</td>
                  <td>{socialMediaCount}</td>
                  <td>{recommendationRating(price, socialMediaCount).toUpperCase()}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}