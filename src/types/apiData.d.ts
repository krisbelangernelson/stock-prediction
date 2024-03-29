export type CompanyData = {
  date: string;
  price: number;
  socialMediaCount: number;
}[]

export type Company = {
  symbol: string;
  name: string;
}

export type Companies = Company[]