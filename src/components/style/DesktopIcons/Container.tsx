import DesktopButton from './DesktopButton'
import {
	Freecell1,
	FlyingThroughSpace100,
	Progman12,
	Mshearts1,
	Oislb400DcScanIco,
	Shell32167,
} from '@react95/icons'

const DesktopIcons = ({
	setIsModalOpen,
	setIsVideoModalOpen,
	setIsFlipTableModalOpen,
	setIsPokerModalOpen,
	setIsBlackjackModalOpen,
	setIsSlotsModalOpen,
}: DesktopIconsProps) => {
	return (
		<div className='desktop-icons-wrapper'>
			<DesktopButton
				icon={
					<Freecell1
						variant='32x32_4'
						className='desktop-icon-img'
					/>
				}
				name='QuaiFlip'
				onClick={() => setIsModalOpen(true)}
			/>
			<DesktopButton
				icon={
					<Progman12
						variant='32x32_4'
						className='desktop-icon-img'
					/>
				}
				name='Game Details'
				onClick={() => setIsFlipTableModalOpen(true)}
			/>
			<DesktopButton
				icon={<FlyingThroughSpace100 className='desktop-icon-img' />}
				name='Video Player'
				onClick={() => setIsVideoModalOpen(true)}
			/>
			<DesktopButton
				icon={
					<Mshearts1
						variant='32x32_4'
						className='desktop-icon-img'
					/>
				}
				name='Poker Galore'
				onClick={() => setIsPokerModalOpen(true)}
			/>
			<DesktopButton
				icon={
					<Oislb400DcScanIco
						variant='32x32_4'
						className='desktop-icon-img'
					/>
				}
				name='Ultimate Blackjack'
				onClick={() => setIsBlackjackModalOpen(true)}
			/>
			<DesktopButton
				icon={
					<Shell32167
						variant='32x32_4'
						className='desktop-icon-img'
					/>
				}
				name='Double-X Slots'
				onClick={() => setIsSlotsModalOpen(true)}
			/>
		</div>
	)
}

export default DesktopIcons
