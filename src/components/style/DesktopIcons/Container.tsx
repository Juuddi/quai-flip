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
				hover='Quai Flip is crypto based coinflip game. Flip to win!'
			/>
			<DesktopButton
				icon={<FlyingThroughSpace100 className='desktop-icon-img' />}
				name='Video Player'
				onClick={() => setIsVideoModalOpen(true)}
				hover='Play a special video from our collection.'
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
				hover='Play a vintage game of poker. (Not real money)'
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
				hover='Play a vintage game of blackjack. (Not real money)'
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
				hover='Play on a vintage slot machine. (Not real money)'
			/>
		</div>
	)
}

export default DesktopIcons
