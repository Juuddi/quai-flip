import { useContext } from 'react'
import { quais } from 'quais'
import { ethers } from 'ethers'
import { GlobalDispatchContext, GlobalStateContext } from '../utils/store'
import { contractABI } from '../utils/contract'

function useContract() {
	const { rpcUrl, contractAddress, account } = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	// set contract and provider
	const provider = new quais.providers.JsonRpcProvider(rpcUrl, 'any')
	const contract = new quais.Contract(contractAddress, contractABI, provider)

	// getBalance calls the contract's getContractBalance function and sets the contract balance in state
	const getBalance = async () => {
		let balance
		await contract
			.getContractBalance()
			.then((res: any) => {
				const wei = quais.BigNumber.from(res._hex)
				balance = quais.utils.formatEther(wei)
				dispatch({
					type: 'SET_CONTRACT_BALANCE',
					payload: balance,
				})
			})
			.catch((err: Error) => {
				console.error(err)
			})
		return balance
	}

	// getGameCount calls the contract's totalFlips function and sets the game count in state
	const getGameCount = async () => {
		let gameCount
		await contract
			.totalFlips()
			.then((res: any) => {
				gameCount = res.toNumber()
				dispatch({ type: 'SET_GAME_COUNT', payload: gameCount })
			})
			.catch((err: Error) => {
				console.error(err)
			})
		return gameCount
	}

	// play calls the contract's Play function and sets the tx hash in state
	// takes in heads (boolean), bet (number), and setIsFlipStatusModalOpen (function)
	// handles opening of the FlipStatusModal
	const play = async (heads: boolean, bet: number, setIsFlipStatusModalOpen: any) => {
		const value = ethers.utils.parseEther(bet.toString())._hex
		const transactionData = await contract.populateTransaction.Play(heads, {
			value: value,
		})
		const tx = {
			from: account.addr,
			to: contractAddress,
			data: transactionData.data,
			value: value,
		}

		await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [tx],
			})
			.then((tx: any, err: Error) => {
				if (err) {
					console.log('TX Error:', err)
				} else {
					console.log('TX:', tx)
					dispatch({ type: 'SET_TX_HASH', payload: tx })
					dispatch({
						type: 'SET_IS_FLIPPING',
						payload: { flipping: true, choice: heads, bet: bet },
					})
					setIsFlipStatusModalOpen(true)
				}
			})
			.catch((err: Error) => {
				console.log('TX Error:', err)
			})
	}

	return {
		getGameCount,
		getBalance,
		play,
	}
}

export default useContract

//   const filter = contract.filters.Status(
//     null,
//     accounts[0].addr,
//     null,
//     null,
//     null
//   );
//   contract.on(filter, (msg, player, prize, winner, heads) => {
//     const pri = ethers.utils.formatEther(prize.toNumber());
//     const gameResult = {
//       message: msg,
//       player: player,
//       prize: pri,
//       winner: winner,
//       heads: heads,
//     };
//     console.log("Game Result:", gameResult);
//     getTableData();
//     dispatch({
//       type: "SET_IS_FLIPPING",
//       payload: { flipping: false, choice: false, bet: 0 },
//     });
//     dispatch({ type: "GAME_RESULT", payload: gameResult });
//   });
