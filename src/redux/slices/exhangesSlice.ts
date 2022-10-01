import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Exchange } from "../../models/Exchange"

interface ExchangesState {
	exchanges: Exchange[]
}

const initialState: ExchangesState = {
	exchanges: [{ cc: "UAH", exchangedate: "", r030: "", rate: 1, txt: "Гривня" }]
}

const exchangesSlice = createSlice({
	name: "exchanges",
	initialState,
	reducers: {
		initialExhanges: (state, action: PayloadAction<Exchange[]>) => {
			state.exchanges = [...state.exchanges, ...action.payload]
		}
	}
})

export const { initialExhanges } = exchangesSlice.actions
export default exchangesSlice.reducer
