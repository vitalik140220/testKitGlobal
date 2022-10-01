import { useAppSelector } from "../../hooks/redux"
const useAllExchangeRats = () => {
	const { exchanges, defaultExchange } = useAppSelector(
		(state) => state.exchanges
	)

	const exchangesWithoutDefaultExchange = exchanges.filter(
		(exchange) => exchange.cc !== defaultExchange.cc
	)

	return { exchangesWithoutDefaultExchange, defaultExchange }
}

export default useAllExchangeRats
