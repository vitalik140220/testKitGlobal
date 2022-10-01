import { FC } from "react"
import { Exchange } from "../../models/Exchange"
import "./style.css"

interface ExchangeComponentProps {
	from: Exchange
	to: Exchange
}

const ExchangeComponent: FC<ExchangeComponentProps> = ({ from, to }) => {
	return (
		<div className='exhange'>
			1 {from.cc} = {from.rate / to.rate} {to.cc}
		</div>
	)
}

export default ExchangeComponent
