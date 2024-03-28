import { fireEvent, render, screen } from "@testing-library/react"
import TimeWindow from "../TimeWindow"

const setTimeWindow = jest.fn()

describe('<TimeWindow />', () => {
  it('should show time window and has 10 selected', () => {
    render(<TimeWindow timeWindow="10" setTimeWindow={setTimeWindow} />)

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);

    expect((screen.getByRole('option', { name: '10' }) as HTMLOptionElement).selected).toBe(true)
  })

  // have to rerender with changed value as this is not an integration test
  it('should show select new time window value of 5', () => {
    const { rerender } = render(<TimeWindow timeWindow="10" setTimeWindow={setTimeWindow} />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: '5' } })

    rerender(<TimeWindow timeWindow="5" setTimeWindow={setTimeWindow} />)

    expect((screen.getByRole('option', { name: '5' }) as HTMLOptionElement).selected).toBe(true)
  })
})
