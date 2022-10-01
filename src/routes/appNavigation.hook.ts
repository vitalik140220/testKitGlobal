import { useEffect } from "react"
import { useLazyGetAllExchangeQuery } from "../services/exchangeAPI"
import { useAppDispatch } from "../hooks/redux"
import { initialExhanges } from "../redux/slices/exhangesSlice"

const useAppNavigation = () => {
	const [getAllExhangeQuery] = useLazyGetAllExchangeQuery()
	const dispatch = useAppDispatch()

	const getAllExhanges = async () => {
		const { data } = await getAllExhangeQuery("")
		if (data) {
			dispatch(initialExhanges(data))
		}
	}

	useEffect(() => {
		getAllExhanges()
	}, [])

	return {}
}

export default useAppNavigation
