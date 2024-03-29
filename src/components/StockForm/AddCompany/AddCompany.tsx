import { useState } from "react"
import PlusIcon from "@/components/shared/PlusIcon"
import { AddCompanyProps } from "@/types/stock"
import './AddCompany.css'

export default function AddCompany(props: AddCompanyProps) {
  const { handleAddCompany, companies } = props
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const onClickAddStock = () => {
    const exists = companies.find((company) => company.symbol === symbol)

    if (!exists) {
      handleAddCompany(symbol, name)
      setSymbol('')
      setName('')
      setError('')
    } else {
      setError('Company already exists')
    }
  }

  return (
    <div className="add-company">
      <div className="title">Add Company</div>
      <div className="add-form">
        <label htmlFor="symbol">Symbol</label>
        <input type="text" name="symbol" id="symbol" value={symbol} onChange={(e) => { setSymbol(e.target.value) }} maxLength={6} />
        <label htmlFor="name" className="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} maxLength={20} />
        <div onClick={onClickAddStock}>
          <PlusIcon width="16px" height="16px" />
        </div>
      </div>
      {error && <div className="red">{error}</div>}
    </div>
  )
}