import { Input, Fieldset, Checkbox, Button } from '@react95/core'
// import { useContract } from '../../hooks/useContract'
import { useState } from 'react'

export const Bet = (setIsFlipStatusModalOpen: Function) => {
	const [isHeads, setIsHeads] = useState(false)
	const [bet, setBet] = useState(0.0001)
	// const { play } = useContract()

	const HandleFlip = () => {
		let choice = isHeads ? 'true' : 'false'
		setIsFlipStatusModalOpen(false)
		// play(choice, bet, setIsFlipStatusModalOpen)
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
		<Fieldset legend='Enter Your Bet'>
			<div className='game-bet-wrapper'>
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
				<div className='game-input-wrapper'>
					<Input
						type='number'
						placeholder='0.01'
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
						Flip
					</Button>
				</div>
			</div>
		</Fieldset>
	)
}

export const CoinSpin = () => {
	return (
		<div className='coin-spin-wrapper'>
			<img
				src='assets/CoinSpin.gif'
				alt='Coin Spinning'
				style={{ width: '60px', height: '60px' }}
			/>
		</div>
	)
}
