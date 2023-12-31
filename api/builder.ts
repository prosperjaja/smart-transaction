import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import {
  IDashboardChart,
  IForecast,
  ITransactionDetails,
  ITransactionOverview,
} from "@/types";

export const builder = createBuilder({
  total_points: {
    fetch: () => API.get<IForecast>(`/api/v1/supplies/forecast`),
  },
  transaction_details: {
    fetch: () => API.get<ITransactionDetails>(`/api/v1/transactions/latest`),
  },
  transaction_overview: {
    fetch: () => API.get<ITransactionOverview>(`/api/v1/transactions/overview`),
  },
  transaction_logs: {
    fetch: () => API.get<IDashboardChart>(`/api/v1/transactions/payout-logs`),
  },
});
