import { useContext } from 'react'
import { GlobalDispatchContext } from '../utils/store'
import { getShardFromAddress } from 'quais/lib/utils'
import { getContractAddressFromShard } from '../utils/helpers'

const usePelagus = () => {
	const dispatch = useContext(GlobalDispatchContext)

	// requestAccounts should be triggered by a user action, prompts connection request via extension pop-up
	// if user accepts, account is set in state, connected is set to true, and contract address is set in state
	// if user denies, a 4001 error is printed to the console and nothing happens on the user side
	const requestAccounts = async () => {
		await window.ethereum
			.request({ method: 'eth_requestAccounts' })
			.then((accounts: Array<string>) => {
				const account = { addr: accounts[0], shard: getShardFromAddress(accounts[0]) }
				const contractAddress = getContractAddressFromShard(account.shard)
				dispatch({ type: 'SET_ACCOUNT', payload: account })
				dispatch({ type: 'SET_CONNECTED', payload: true })
				dispatch({ type: 'SET_CONTRACT_ADDRESS', payload: contractAddress })
			})
			.catch((err: Error) => {
				console.log('Error getting accounts.', err)
			})
	}

	// getAccounts should only run in the background, checks for an existing wallet connection
	// if user is connected, account is set in state, connected is set to true, and contract address is set in state
	// if user is not connected, nothing happens on the user side and no error is printed to the console
	const getAccounts = async () => {
		console.log('eth_accounts...')
		try {
			let account
			await window.ethereum
				.request({ method: 'eth_accounts' })
				.then((accounts: Array<string>) => {
					if (accounts.length !== 0) {
						const account = { addr: accounts[0], shard: getShardFromAddress(accounts[0]) }
						const contractAddress = getContractAddressFromShard(account.shard)
						dispatch({ type: 'SET_ACCOUNT', payload: account })
						dispatch({ type: 'SET_CONNECTED', payload: true })
						dispatch({ type: 'SET_CONTRACT_ADDRESS', payload: contractAddress })
					}
				})
				.catch((err: Error) => {
					console.error(err)
				})
			return account
		} catch (err: any) {
			console.error(err)
		}
	}

	return {
		requestAccounts,
		getAccounts,
	}
}

export default usePelagus
