
import { useState } from 'react';
import companiesFile from '@/mocks/data/companyData'
import { StockFormProps } from '@/types/stock';
import SocialMediaInfo from './SocialMediaInfo/SocialMediaInfo';
import StockList from './StockList';
import TimeWindow from './TimeWindow/TimeWindow';
import AddCompany from './AddCompany/AddCompany';
import './StockForm.css'

export default function StockForm(props: StockFormProps) {
  const { setStockSelected, stockSelected, timeWindow, setTimeWindow, data } = props
  const [companies, setCompanies] = useState(companiesFile)
  const company = companies.find((company) => company.symbol === stockSelected)

  const handleRemoveCompany = (symbol: string) => {
    const newCompanies = companies.filter((company) => company.symbol !== symbol)
    setCompanies(newCompanies)

    if (stockSelected === symbol) setStockSelected('')
  }

  const handleAddCompany = (symbol: string, name: string) => {
    const newCompany = { symbol, name }
    setCompanies((prev) => ([...prev, newCompany]))
  }

  return (
    <section className="stock-form">
      <div className="stock-form-content">
        <StockList stockSelected={stockSelected} setStockSelected={setStockSelected} companies={companies} handleRemoveCompany={handleRemoveCompany} />
        <div className="form-sidebar">
          <AddCompany handleAddCompany={handleAddCompany} companies={companies} />
          {company ? <TimeWindow timeWindow={timeWindow} setTimeWindow={setTimeWindow} /> : <div />}
        </div>
        {company ? <SocialMediaInfo company={company} data={data} /> : <h2>Select a social media stock</h2>}
      </div>
    </section>
  )
}