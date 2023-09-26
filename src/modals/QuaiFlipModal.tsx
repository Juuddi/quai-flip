import { Frame, Modal } from '@react95/core'
import { Freecell1 } from '@react95/icons'
import AccountFrame from '../components/functional/AccountFrame'
import { Explainer } from '../components/style/CopyComponents'
import { Bet } from '../components/functional/GameComponents'

const QuaiFlipModal = ({ setIsModalOpen, setIsFlipStatusModalOpen }: QuaiFlipModalProps) => {
	return (
		<Modal
			icon={<Freecell1 variant='32x32_4' />}
			title='QuaiFlip'
			closeModal={() => setIsModalOpen(false)}
			style={{ left: '28%', top: '6%' }}
		>
			<Frame
				w='400px'
				boxShadow='in'
				p='10px'
			>
				<div className='main-wrapper'>
					<AccountFrame />
					<Explainer />

					<Bet {...{ setIsFlipStatusModalOpen }} />
				</div>
			</Frame>
		</Modal>
	)
}

export default QuaiFlipModal
