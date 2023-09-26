import { useContext } from 'react'
import { quais } from 'quais'
import { ethers } from 'ethers'
import { GlobalDispatchContext, GlobalStateContext } from '../utils/store'
import { contractABI } from '../utils/contract'

function useContract() {
	const { rpcUrl, contractAddress } = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	// set contract and provider
	const provider = new quais.providers.JsonRpcProvider(rpcUrl, 'any')
	const contract = new quais.Contract(contractAddress, contractABI, provider)

	// getBalance calls the contract's getContractBalance function and sets the contract balance in state
	const getBalance = async () => {
		await contract
			.getContractBalance()
			.then((res: any) => {
				console.log('contractBalance', res)
				dispatch({
					type: 'SET_CONTRACT_BALANCE',
					payload: quais.utils.formatEther(res.toNumber()),
				})
			})
			.catch((err: Error) => {
				console.error(err)
			})
	}

	// getGameCount calls the contract's getGameCount function and sets the game count in state
	const getGameCount = async () => {
		await contract
			.getGameCount()
			.catch((err: Error) => {
				console.error(err)
			})
			.then((res: any) => {
				const gameCountRes = res.toNumber()
				console.log('contractBalance', gameCountRes)
				dispatch({ type: 'SET_GAME_COUNT', payload: gameCountRes })
			})
	}

	// getAllGames calls the contract's getAllGames function and sets the game history in state
	const getAllGames = async () => {
		await contract
			.getAllGames()
			.catch((err: Error) => {
				console.error(err)
			})
			.then((res: Error) => {
				dispatch({ type: 'SET_GAME_HISTORY', payload: res })
				dispatch({ type: 'SET_IS_TABLE_LOADING', payload: false })
			})
	}

	// play calls the contract's Play function and sets the tx hash in state
	// takes in heads (boolean), bet (number), and setIsFlipStatusModalOpen (function)
	// handles opening of the FlipStatusModal
	const play = async (heads: boolean, bet: number, setIsFlipStatusModalOpen: any) => {
		await contract
			.Play(heads, { value: ethers.utils.parseEther(bet.toString()) })
			.catch((err: Error) => {
				console.error(err)
			})
			.then((tx: any, err: Error) => {
				if (err) {
					console.log('TX Error:', err)
				} else {
					console.log('TX:', tx)
					dispatch({ type: 'SET_TX_HASH', payload: tx.hash })
					dispatch({
						type: 'SET_IS_FLIPPING',
						payload: { flipping: true, choice: heads, bet: bet },
					})
					setIsFlipStatusModalOpen(true)
				}
			})
	}

	return {
		getGameCount,
		getAllGames,
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
