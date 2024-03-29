import { SocialMediaInfoProps } from "../../../types/stock"
import './SocialMediaInfo.css'

export default function SocialMediaInfo(props: SocialMediaInfoProps) {
  const { company, data } = props

  return (
    <div className="social-media-info">
      <div className="company-name">{company.name}</div>
      <div className="social-data">
        <div className="data-headers">
          <div>Date:</div>
          <div>Price:</div>
          <div>Posts:</div>
        </div>
        {data.map(({ date, price, socialMediaCount }) => (
          <div className="data-row" key={price}>
            <div>{date}</div>
            <div>${price}</div>
            <div>{socialMediaCount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}