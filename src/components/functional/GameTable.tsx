import { Frame } from '@react95/core'
// import useFlipData from '../../../hooks/useFlipData';
import { useContext } from 'react'
import { GlobalStateContext } from '../../utils/store'
import { ethers } from 'ethers'

//TODO
// Handle case where data has not loaded in yet (getGameCount and getGameEntry promises have not resolved yet)
// Consider frontloading table data and setting to global state as the app loads up rather than when the user logs in (may solve above item)
// consider optimal data format from smart contract output and make changes to both table and contract based on conclusion.

const GameTable = () => {
	const state = useContext(GlobalStateContext)
	const { gameHistory, isTableLoading } = state

	const forEveryObjectInArrayCreateTableRow = () => {
		if (!isTableLoading) {
			return gameHistory.map((item, index) => {
				// Handle data formatting
				const player = item.player.substring(0, 4) + ' ... ' + item.player.substring(37, 42)
				const bet = ethers.utils.formatEther(item.bet.toNumber())
				const prize = ethers.utils.formatEther(item.prize.toNumber())
				let winner = ''
				if (item.winner) {
					winner = 'Won'
				} else {
					winner = 'Lost'
				}
				return (
					<div
						className='grid-row'
						key={index}
					>
						<div>{player.toLowerCase()}</div>
						<div>{bet}</div>
						<div>{prize}</div>
						<div>{winner}</div>
					</div>
				)
			})
		} else {
			return (
				<div className='grid-row'>
					<div>Loading...</div>
				</div>
			)
		}
	}
	return (
		<Frame>
			<Frame
				boxShadow='in'
				bg='white'
			>
				<div className='table-wrapper'>
					<div className='title-row-wrapper'>
						<div className='title-row'>
							<p>Player</p>
							<p>Bet (QUAI)</p>
							<p>Prize (QUAI)</p>
							<p>Result</p>
						</div>
					</div>
					<div className='table'>{forEveryObjectInArrayCreateTableRow()}</div>
				</div>
			</Frame>
		</Frame>
	)
}

export default GameTable
