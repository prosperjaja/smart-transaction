//TYPES FOR FORECAST TABLE
export interface IForecast {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: IForecastData[];
}

export interface IForecastData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

//TYPES FOR DASHBOARD TRANSACTION DETAILS
export interface ITransactionDetails {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: ITransactionDetailsData[];
}

export interface ITransactionDetailsData {
  created_at: Date;
  charged_by: ChargedBy;
  charge: Charge;
}

export interface Charge {
  amount: number;
  currency: Currency;
  type: string;
}

export interface Currency {
  code: string;
  sign: string;
}

export interface ChargedBy {
  company: string;
  logo: string;
}

//TYPES FOR DASHBOARD TRANSACTION OVERVIEW
export interface ITransactionOverview {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: ITransactionOverviewData[];
}

export interface ITransactionOverviewData {
  name: string;
  current: number;
  last_month: number;
}
