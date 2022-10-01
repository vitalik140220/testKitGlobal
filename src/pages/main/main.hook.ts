import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useAppSelector } from "../../hooks/redux"

const useMain = () => {
	const [money, setMoney] = useState<string>("")
	const [currentCurrency, setCurrentCurrency] = useState<string>("")
	const [currentConvertToCurrency, setCurrentConvertToCurrency] =
		useState<string>("")
	const [result, setResult] = useState<string>("")
	const { exchanges } = useAppSelector((state) => state.exchanges)

	useEffect(() => {
		setCurrentCurrency(exchanges[0]?.cc)
		setCurrentConvertToCurrency(exchanges[1]?.cc)
	}, [exchanges])

	const currencies = exchanges.map((exchange) => exchange.cc)
	const currentRate = exchanges.find(
		(exchange) => exchange.cc === currentCurrency
	)
	const convertRate = exchanges.find(
		(exchange) => exchange.cc === currentConvertToCurrency
	)
	const handleMoneyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMoney(event.target.value)
	}
	const handleCurrentCurrencyChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		setCurrentCurrency(event.target.value)
	}

	const handleCurrentConvertToCurrencyChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		setCurrentConvertToCurrency(event.target.value)
	}

	const handleSubmitClick = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (money) {
			if (currentCurrency !== "UAH") {
				setResult(
					(
						(parseFloat(money) * currentRate?.rate!) /
						convertRate?.rate!
					).toString()
				)
			} else {
				setResult((parseFloat(money) * convertRate?.rate!).toString())
			}
		}
	}

	return {
		handleMoneyChange,
		handleSubmitClick,
		handleCurrentCurrencyChange,
		handleCurrentConvertToCurrencyChange,
		currencies,
		currentCurrency,
		result,
		currentConvertToCurrency,
		money
	}
}

export default useMain
