import './StockTable.css'

export default function StockTable() {
  return (
    <div className="stock-table-container">
      <div className="stock-table-content">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>META</td>
              <td>70</td>
              <td>Sell</td>
              <td>2024-03-27</td>
            </tr>
            <tr>
              <td>META</td>
              <td>70</td>
              <td>Sell</td>
              <td>2024-03-27</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}