
import SocialMediaInfo from './SocialMediaInfo';
import './StockForm.css'
import StockList from './StockList';
import TimeWindow from './TimeWindow';
import companiesFile from '../../mocks/data/companyData'
import { StockFormProps } from '../../types/stock';
import { useState } from 'react';

export default function StockForm(props: StockFormProps) {
  const { setStockSelected, stockSelected, timeWindow, setTimeWindow, data } = props
  const [companies, setCompanies] = useState(companiesFile)
  const company = companies.find((company) => company.symbol === stockSelected)

  const handleRemoveCompany = (name: string) => {
    const newCompanies = companies.filter((company) => company.name !== name)
    setCompanies(newCompanies)
    setStockSelected('')
  }

  return (
    <section className="stock-form">
      <div className="stock-form-content">
        <StockList stockSelected={stockSelected} setStockSelected={setStockSelected} companies={companies} handleRemoveCompany={handleRemoveCompany} />
        {company ? <TimeWindow timeWindow={timeWindow} setTimeWindow={setTimeWindow} /> : <div />}
        {company ? <SocialMediaInfo company={company} data={data} /> : <h2>Select a social media stock</h2>}
      </div>
    </section>
  )
}