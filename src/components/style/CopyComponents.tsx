import { useContext } from 'react'
import { Fieldset } from '@react95/core'
import { BsGithub } from 'react-icons/bs'
import { GlobalStateContext } from '../../utils/store'

export const Explainer = () => {
	return (
		<Fieldset legend='How it works:'>
			<div className='column-copy'>
				<p className='explainer-text'>Choose head or tails. Place your bet. Flip the coin.</p>
				<br />
				<p className='explainer-text'>
					If you chose right, you win 90% of your original bet. If you chose wrong, you lose your original
					bet.
				</p>
				<br />
				<p className='explainer-text'>
					<strong> Happy flipping!</strong>
				</p>
			</div>
		</Fieldset>
	)
}

export const Footer = () => {
	const { contractAddress } = useContext(GlobalStateContext)
	return (
		<Fieldset legend='Game info'>
			<div className='copy-footer-wrapper'>
				<p>
					<strong>Contract Address:</strong> {contractAddress}
				</p>
				<a
					href='https://github.com'
					target='blank'
					rel='noopen referrer'
					className='github-icon'
					style={{ textDecoration: 'none' }}
				>
					<BsGithub
						size={28}
						color='black'
						className='github-icon'
					/>
				</a>
			</div>
		</Fieldset>
	)
}

export const FlipBreakDown = () => {
	return (
		<Fieldset legend='Breakdown'>
			<div className='copy-flip-breakdown'>
				<p>
					The Quai Flip smart contract is written such that heads/tails is decided by the timestamp of the
					block for which your bet is confirmed. An even timestamp is equivalent to heads, while an odd
					timestamp yields tails.
				</p>
			</div>
		</Fieldset>
	)
}
