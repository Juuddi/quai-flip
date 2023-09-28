import { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { Input, Fieldset, Checkbox, Button } from '@react95/core'
import { GlobalStateContext } from '../../utils/store'
import useContract from '../../hooks/useContract'

export const Bet = ({ setIsFlipStatusModalOpen }: FlipStatusModalProps) => {
	const [isHeads, setIsHeads] = useState(false)
	const [bet, setBet] = useState(0.0001)
	const betAmounts = [0.1, 0.5, 1, 5]
	const { play } = useContract()

	const HandleFlip = () => {
		play(isHeads, bet, setIsFlipStatusModalOpen)
	}

	const HandleCheck = (key: any) => {
		switch (key) {
			case 'heads':
				setIsHeads(true)
				break
			case 'tails':
				setIsHeads(false)
				break
			default:
				break
		}
	}
	return (
		<>
			<Fieldset legend='Choose A Side'>
				<div className='game-choice-selection-wrapper'>
					<Checkbox
						checked={isHeads}
						onChange={() => HandleCheck('heads')}
						label='Heads'
					/>
					<Checkbox
						checked={!isHeads}
						onChange={() => HandleCheck('tails')}
						label='Tails'
					/>
				</div>
			</Fieldset>
			<Fieldset legend='Enter Your Bet'>
				<div className='game-input-wrapper'>
					<div className='input-button-wrapper'>
						{betAmounts.map((bet: number, index: number) => (
							<Button
								key={index}
								className='input-button'
								onClick={() => setBet(bet)}
							>
								{bet}
							</Button>
						))}
					</div>
					<Input
						type='number'
						placeholder='0.1'
						className='game-bet-input'
						value={bet}
						onChange={(e: any) => setBet(e.target.value)}
						min='0'
						step='0.1'
					/>
					<Button
						className='game-bet-button'
						onClick={HandleFlip}
					>
						<p className='text-gradient'>Flip</p>
					</Button>
				</div>
			</Fieldset>
		</>
	)
}

export const CoinSpin = () => {
	return (
		<div className='coin-spin-wrapper'>
			<Image
				src='/assets/CoinSpin.gif'
				alt='Coin Spinning'
				width={60}
				height={60}
				priority={true}
			/>
		</div>
	)
}

export const FlipStats = () => {
	const { gameCount, contractBalance } = useContext(GlobalStateContext)
	const { getGameCount, getBalance } = useContract()
	async function getGameCountAndBalance() {
		const gameCount = await getGameCount()
		const balance = await getBalance()
		console.log(' gameCount: ', gameCount, ' balance: ', balance)
		return { gameCount, balance }
	}

	useEffect(() => {
		getGameCountAndBalance()
	}, [])
	return (
		<Fieldset legend='Details'>
			<div className='flip-stats-wrapper'>
				<div className='flip-stats'>
					<p>
						Coin Flips: <strong>{gameCount}</strong>
					</p>
					<p>
						Contract Balance: <strong>{contractBalance} QUAI</strong>
					</p>
				</div>
			</div>
		</Fieldset>
	)
}
