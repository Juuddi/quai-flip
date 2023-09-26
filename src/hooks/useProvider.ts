import { useContext, useEffect } from 'react'
import { GlobalDispatchContext } from '../utils/store'
import usePelagus from './usePelagus'
import { detectWindow } from '../utils/helpers'

function useProvider() {
	const { getAccounts } = usePelagus()
	const dispatch = useContext(GlobalDispatchContext)

	// TODO refactor once changes have been pushed to Pelagus
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
			}
		}
	}
	useEffect(() => {
		detect()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export default useProvider
