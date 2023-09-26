import { useContext, useEffect } from 'react'
import { GlobalStateContext, GlobalDispatchContext } from '../../utils/store'
import { getShardFromAddress } from 'quais/lib/utils'
import {
	reducetextShowSmallLength,
	getRPCURL,
	getPrettyNameFromShard,
	getContractAddressFromShard,
} from '../../utils/helpers'

const AccountFrame = () => {
	const { account } = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	useEffect(() => {
		if (window.ethereum) {
			// Event listener for account changes
			window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
				if (accounts.length === 0) {
					dispatch({ type: 'SET_CONNECTED', payload: false })
				} else {
					const account = { addr: accounts[0], shard: getShardFromAddress(accounts[0]) }
					const rpcUrl = getRPCURL(account.shard, 'local')
					const contractAddress = getContractAddressFromShard(account.shard)
					dispatch({
						type: 'SET_ACCOUNT',
						payload: account,
					})
					dispatch({
						type: 'SET_RPC_URL',
						payload: rpcUrl,
					})
					dispatch({
						type: 'SET_CONTRACT_ADDRESS',
						payload: contractAddress,
					})
				}
			})
			// Remove listener on unmount
			window.ethereum.removeListener('accountsChanged', () => {})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='frame-wrapper'>
			<div className='connected'>
				<p className='connected-text'>Connected</p>
			</div>

			<div className='column'>
				<div className='row-wrapper'>
					<pre>Account: </pre>
					<p className='address-text'>{reducetextShowSmallLength(account.addr)}</p>
				</div>
				<div className='row-wrapper'>
					<pre>Chain: </pre>
					<p className='shard-text'>{getPrettyNameFromShard(account.shard)}</p>
				</div>
			</div>
		</div>
	)
}

export default AccountFrame
