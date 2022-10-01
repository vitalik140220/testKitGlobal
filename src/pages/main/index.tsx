import { FC } from "react"
import useMain from "./main.hook"
import "./style.css"

const Main: FC = () => {
	const {
		handleMoneyChange,
		handleSubmitClick,
		handleCurrentCurrencyChange,
		handleCurrentConvertToCurrencyChange,
		currencies,
		defaultExchange,
		result,
		currentConvertToCurrency,
		money
	} = useMain()
	return (
		<div className='main'>
			<div className='title'>Конвертер валют</div>
			<div className='inputsContainer'>
				<form onSubmit={handleSubmitClick}>
					<input
						type='number'
						onChange={handleMoneyChange}
						value={money}
						required
						placeholder='Введіть сумму'
					/>
					<label>З</label>
					<select
						name='Валюта'
						id='currency'
						onChange={handleCurrentCurrencyChange}
						value={defaultExchange.cc}>
						{currencies.map((currency) => (
							<option key={currency} value={currency} label={currency} />
						))}
					</select>
					<label>В</label>
					<select
						name='Валюта'
						id='currency'
						onChange={handleCurrentConvertToCurrencyChange}
						value={currentConvertToCurrency}>
						{currencies.map((currency) => (
							<option key={currency} value={currency} label={currency} />
						))}
					</select>
					<button type='submit'>Конвертація</button>
				</form>
			</div>
			<div className='resultTitle'>Результат:</div>
			<div className='result'>{result || 0}</div>
		</div>
	)
}

export default Main
