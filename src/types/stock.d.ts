import { Dispatch, SetStateAction } from 'react';
import { ApiData } from './apiData';

export interface StockProps {
  setStockSelected: Dispatch<SetStateAction<string>>
  stockSelected: string
}

export interface TimeWindowProps {
  setTimeWindow: Dispatch<SetStateAction<string>>
  timeWindow: string
}

export interface StockFormProps extends StockProps, TimeWindowProps { data: ApiData }

export interface StockListProps extends StockProps { }

export interface StockListItemProps extends StockProps {
  symbol: string
}

export interface SocialMediaInfoProps {
  company: {
    symbol: string
    name: string
  }
  data: ApiData
}

export interface StockTableProps {
  stockSelected: string
  data: ApiData
}