import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Exchange } from "../models/Exchange"
export const exchangeAPI = createApi({
	reducerPath: "exchangeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
	}),
	endpoints: (build) => ({
		getAllExchange: build.query<Exchange[], string>({
			query: () => ""
		})
	})
})

export const { useLazyGetAllExchangeQuery } = exchangeAPI
