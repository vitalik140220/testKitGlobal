import { FC } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../components/header"
import AllExchangeRates from "../pages/allExchangeRates"
import Main from "../pages/main"
const AppNavigation: FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/allExchangeRates' element={<AllExchangeRates />} />
			</Routes>
		</Router>
	)
}

export default AppNavigation
