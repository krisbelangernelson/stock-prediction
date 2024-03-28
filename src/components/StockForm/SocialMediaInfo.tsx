import { SocialMediaInfoProps } from "../../types/stock"

export default function SocialMediaInfo(props: SocialMediaInfoProps) {
  const { company } = props

  return (
    <div className="social-media-info">
      <div className="company-name">{company.name}</div>
    </div>
  )
}