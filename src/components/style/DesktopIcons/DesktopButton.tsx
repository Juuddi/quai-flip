import { Tooltip } from '@react95/core'

const DesktopButton = ({ icon, name, onClick, hover }: DesktopButtonProps) => {
	return (
		<Tooltip
			text={hover}
			delay={500}
		>
			<button
				className='desktop-icon-button'
				onDoubleClick={onClick}
			>
				{icon}
				<div className='desktop-icon-text'>{name}</div>
			</button>
		</Tooltip>
	)
}

export default DesktopButton
