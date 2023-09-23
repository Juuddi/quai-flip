import { Modal, Frame } from '@react95/core';

const EmulatorGameModal = ({ title, Icon, CloseFunction, Link }) => {
	return (
		<Modal
			title={title}
			icon={Icon}
			width='750'
			hasWindowButton='false'
			closeModal={CloseFunction}
			style={{ left: '27%', top: '17%' }}
		>
			<Frame
				bg='white'
				boxShadow='in'
				height='100%'
				padding={20}
				style={{
					overflowY: 'auto',
					background: 'black',
				}}
			>
				<iframe
					width='680'
					height='400'
					frameBorder='0'
					src={Link}
					//"https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fpoker-galore.jsdos?anonymous=1"
					allowFullScreen
					title={title}
				/>
			</Frame>
		</Modal>
	);
};

export default EmulatorGameModal;
