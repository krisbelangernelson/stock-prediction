import { TimeWindowProps } from "./StockForm"

export default function TimeWindow(props: TimeWindowProps) {
  const { setTimeWindow, timeWindow } = props
  return (
    <div className="time-window">
      <div>
        <div className="time-title">Time Window</div>
        <select name="timeWindow" id="select-time" value={timeWindow} onChange={(e) => { setTimeWindow(e.target.value) }}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

    </div>
  )
}