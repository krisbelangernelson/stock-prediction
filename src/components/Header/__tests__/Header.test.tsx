import { render, screen } from "@testing-library/react"
import Header from "../Header"

describe('<Header />', () => {
  it('should display Header', () => {
    render(<Header />)
    expect(screen.getByText('Stock Market Recommender')).toBeInTheDocument()
  })
})
