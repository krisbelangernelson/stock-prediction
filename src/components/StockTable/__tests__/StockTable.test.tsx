import { getMockData } from "../../../utils/generateMockData"
import { fireEvent, render, screen } from "../../../utils/testUtils"
import StockTable from "../StockTable"

const data = getMockData('META', 10)

// Integration tests of the whole app, rather than unit test alone
describe('<StockTable />', () => {
  it('should display no table since there is no selection made', () => {
    render(<StockTable stockSelected="" data={data} />)
    expect(screen.getByText('Select a social media stock')).toBeInTheDocument()
  })

  it('should display table after selecting a stock', async () => {
    render(<StockTable stockSelected="META" data={data} />)

    fireEvent.click(screen.getByLabelText("META"))
    expect(screen.getByText('Social Posts')).toBeInTheDocument()
  })

  it('should display table after selecting a stock, and different time window', async () => {
    render(<StockTable stockSelected="META" data={data} />)

    fireEvent.click(screen.getByLabelText("META"))
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '5' } })

    expect((screen.getByText('5') as HTMLOptionElement).selected).toBeTruthy()
  })
})
