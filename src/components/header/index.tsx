import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import "./style.css"

const Header: FC = () => {
	const { pathname } = useLocation()

	const isActive = (path: string) => (pathname === path ? "active" : "")

	return (
		<nav>
			<ul>
				<li>
					<Link className={isActive("/")} to='/'>
						Головна
					</Link>
				</li>
				<li>
					<Link
						className={isActive("/allExchangeRates")}
						to='/allExchangeRates'>
						Курс Валют
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header
