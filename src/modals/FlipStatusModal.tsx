import { useContext } from 'react'
import { GlobalStateContext, GlobalDispatchContext } from '../utils/store'
import { Modal, Frame } from '@react95/core'
import { Systray304 } from '@react95/icons'
import { CoinSpin } from '../components/functional/GameComponents'

const FlipStatusModal = ({ setIsFlipStatusModalOpen }: FlipStatusModalProps) => {
	const state = useContext(GlobalStateContext)
	const { isFlipping, gameResult, txHash } = state
	const dispatch = useContext(GlobalDispatchContext)
	var winner = ''
	var choice = ''
	var heads = ''
	if (isFlipping.choice) {
		choice = 'Heads'
	} else {
		choice = 'Tails'
	}
	if (gameResult) {
		if (gameResult.winner) {
			winner = 'won'
		} else {
			winner = 'lost'
		}
		if (gameResult.heads) {
			heads = 'heads'
		} else {
			heads = 'tails'
		}
	}

	const HandleClose = () => {
		setIsFlipStatusModalOpen(false)
		dispatch({
			type: 'SET_IS_FLIPPING',
			payload: { flipping: false, choice: null, bet: null },
		})
	}

	return (
		<Modal
			title='Coin Flip'
			icon={<Systray304 variant='32x32_4' />}
			width='280'
			closeModal={() => HandleClose()}
			style={{ left: '56%', top: '6%' }}
		>
			<Frame
				boxShadow='in'
				padding={20}
				style={{
					overflowY: 'auto',
					height: '100%',
				}}
			>
				{isFlipping.flipping ? (
					<div className='spinWrapper'>
						<CoinSpin />
						<div className='spinText'>
							<h1>
								{isFlipping.bet} QUAI bet on {choice} submitted.
							</h1>
							<a
								href={`https://goerli.etherscan.io/tx/${txHash}`}
								target='_blank'
								rel='noreferrer'
							>
								View In Explorer
							</a>
						</div>
					</div>
				) : (
					<div className='gameResultWrapper'>
						<CoinSpin />
						<div className='gameResult'>
							<h1>The coin landed on {heads}.</h1>
							<h1>{gameResult.message}</h1>
							<h1>
								You {winner} <strong>{gameResult.prize} QUAI.</strong>
							</h1>
						</div>
					</div>
				)}
			</Frame>
		</Modal>
	)
}

export default FlipStatusModal
