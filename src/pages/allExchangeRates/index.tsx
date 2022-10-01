import { FC } from "react"
import ExchangeComponent from "../../components/exchange"
import useAllExchangeRats from "./allExchangeRats.hook"
import "./style.css"
const AllExchangeRates: FC = () => {
	const { exchangesWithoutDefaultExchange, defaultExchange } =
		useAllExchangeRats()

	return (
		<div className='allExchangeRats'>
			<div className='title'>Курси валют</div>
			<div className='exchangesContainer'>
				{exchangesWithoutDefaultExchange.map((exchange) => (
					<ExchangeComponent from={defaultExchange} to={exchange} />
				))}
			</div>
		</div>
	)
}

export default AllExchangeRates
