import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { changeDefaultExchange } from "../../redux/slices/exhangesSlice"

const useMain = () => {
	const [money, setMoney] = useState<string>("")
	const [currentConvertToCurrency, setCurrentConvertToCurrency] =
		useState<string>("")
	const [result, setResult] = useState<string>("")
	const { exchanges, defaultExchange } = useAppSelector(
		(state) => state.exchanges
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setCurrentConvertToCurrency(exchanges[1]?.cc)
	}, [exchanges])

	const currencies = exchanges.map((exchange) => exchange.cc)
	const convertRate = exchanges.find(
		(exchange) => exchange.cc === currentConvertToCurrency
	)
	const handleMoneyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMoney(event.target.value)
	}
	const handleCurrentCurrencyChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		dispatch(
			changeDefaultExchange(
				exchanges.find((exchange) => exchange.cc === event.target.value)!
			)
		)
	}

	const handleCurrentConvertToCurrencyChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		setCurrentConvertToCurrency(event.target.value)
	}

	const handleSubmitClick = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (money) {
			setResult(
				(
					(parseFloat(money) * defaultExchange?.rate!) /
					convertRate?.rate!
				).toString()
			)
		}
	}

	return {
		handleMoneyChange,
		handleSubmitClick,
		handleCurrentCurrencyChange,
		handleCurrentConvertToCurrencyChange,
		currencies,
		defaultExchange,
		result,
		currentConvertToCurrency,
		money
	}
}

export default useMain
