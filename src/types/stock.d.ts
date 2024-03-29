import { Dispatch, SetStateAction } from 'react';
import { CompanyData, Company, Companies } from './apiData';

export interface StockProps {
  setStockSelected: Dispatch<SetStateAction<string>>
  stockSelected: string
}

export interface TimeWindowProps {
  setTimeWindow: Dispatch<SetStateAction<string>>
  timeWindow: string
}

export interface StockFormProps extends StockProps, TimeWindowProps { data: CompanyData }

export interface StockListProps extends StockProps {
  companies: Companies
  handleRemoveCompany: (name: string) => void
}

export interface StockListItemProps extends StockProps {
  symbol: string
}

export interface SocialMediaInfoProps {
  company: Company
  data: CompanyData
}

export interface StockTableProps {
  stockSelected: string
  data: CompanyData
}

export interface AddCompanyProps {
  handleAddCompany: (symbol: string, name: string) => void
  companies: Companies
}