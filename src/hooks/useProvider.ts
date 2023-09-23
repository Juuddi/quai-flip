import { useContext, useEffect } from 'react'
import { GlobalDispatchContext } from '../utils/store'
import { detectWindow } from '../utils/helpers'
import usePelagus from './usePelagus'

function useProvider() {
	const { getAccounts } = usePelagus()
	const dispatch = useContext(GlobalDispatchContext)

	const window = detectWindow()
	const detect = async () => {
		// detect window.ethereum
		const detectedProvider = await window?.ethereum
		// detect if provider is Pelagus
		const isPelagus = detectedProvider.isPelagus
		if (detectedProvider) {
			dispatch({ type: 'SET_WINDOW', payload: window })
			dispatch({ type: 'SET_PROVIDER', payload: detectedProvider })
			dispatch({ type: 'SET_IS_PELAGUS', payload: false })
			if (isPelagus) {
				getAccounts()
			} else {
				getAccounts()
				console.log('HERE')
			}
		}
	}
	useEffect(() => {
		detect()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export default useProvider
