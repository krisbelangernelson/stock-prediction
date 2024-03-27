export default function TimeWindow() {
  return (
    <div className="time-window">
      <div>
        <div className="time-title">Time Window</div>
        <select name="timeWindow" id="select-time">
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="20">20</option>
        </select>
      </div>

    </div>
  )
}