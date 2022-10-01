import { configureStore } from "@reduxjs/toolkit"
import { exchangeAPI } from "../services/exchangeAPI"
import exchangesSlice from "./slices/exhangesSlice"

const RootReducer = {
	[exchangeAPI.reducerPath]: exchangeAPI.reducer,
	exchanges: exchangesSlice
}

export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(exchangeAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
