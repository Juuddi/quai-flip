import { Modal, Frame } from '@react95/core'

const EmulatorGameModal = ({ title, icon, closeFunction, link }: EmulatorModalProps) => {
	return (
		<Modal
			title={title}
			icon={icon}
			width='750'
			closeModal={closeFunction}
			style={{ left: '27%', top: '17%' }}
		>
			<Frame
				bg='white'
				boxShadow='in'
				padding={20}
				style={{
					overflowY: 'auto',
					background: 'black',
					height: '100%',
				}}
			>
				<iframe
					width='680'
					height='400'
					src={link}
					//"https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fpoker-galore.jsdos?anonymous=1"
					allowFullScreen
					title={title}
				/>
			</Frame>
		</Modal>
	)
}

export default EmulatorGameModal
