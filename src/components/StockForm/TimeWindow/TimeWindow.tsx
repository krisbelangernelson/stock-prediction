import { TimeWindowProps } from "../../../types/stock"
import './TimeWindow.css'

export default function TimeWindow(props: TimeWindowProps) {
  const { setTimeWindow, timeWindow } = props
  return (
    <div className="time-window">
      <div>
        <div className="time-title">Time Window</div>
        <select name="timeWindow" id="select-time" value={timeWindow} onChange={(e) => { setTimeWindow(e.target.value) }} data-testid="select-time">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}