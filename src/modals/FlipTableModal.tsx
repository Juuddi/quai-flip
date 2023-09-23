import { Modal, Frame } from '@react95/core'
import { Progman12 } from '@react95/icons'
import { Footer } from '../components/style/CopyComponents'
import GameTable from '../components/functional/GameTable'
import { FlipTableModalProps } from '../utils/interfaces'

const FlipTableModal = ({ setIsFlipTableModalOpen }: FlipTableModalProps) => {
	return (
		<Modal
			icon={<Progman12 variant='32x32_4' />}
			title='Game Details'
			closeModal={() => setIsFlipTableModalOpen(false)}
			style={{ left: '28%', top: '55%', width: '500px', height: '500px' }}
		>
			<div className='game-details-wrapper'>
				<Frame
					w='700px'
					boxShadow='in'
					p='2px'
				>
					<GameTable></GameTable>
				</Frame>
				<Footer />
			</div>
		</Modal>
	)
}

export default FlipTableModal
