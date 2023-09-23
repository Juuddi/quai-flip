import { TaskBar, List } from '@react95/core'
import { DesktopIconsProps } from '../../utils/interfaces'
import {
	Progman12,
	FlyingThroughSpace100,
	Freecell1,
	Mshearts1,
	Oislb400DcScanIco,
	Shell32167,
} from '@react95/icons'

const TaskBar95 = ({
	setIsModalOpen,
	setIsVideoModalOpen,
	setIsFlipTableModalOpen,
	setIsPokerModalOpen,
	setIsBlackjackModalOpen,
	setIsSlotsModalOpen,
}: DesktopIconsProps) => {
	return (
		<TaskBar
			list={
				<List>
					<List.Item
						icon={<Freecell1 variant='32x32_4' />}
						onClick={() => setIsModalOpen(true)}
					>
						QuaiFlip
					</List.Item>
					<List.Item
						icon={<FlyingThroughSpace100 variant='32x32_4' />}
						onClick={() => setIsVideoModalOpen(true)}
					>
						Video Player
					</List.Item>
					<List.Item
						icon={<Progman12 variant='32x32_4' />}
						onClick={() => setIsFlipTableModalOpen(true)}
					>
						Game Details
					</List.Item>
					<List.Item
						icon={<Mshearts1 variant='32x32_4' />}
						onClick={() => setIsPokerModalOpen(true)}
					>
						Poker Galore
					</List.Item>
					<List.Item
						icon={<Oislb400DcScanIco variant='32x32_4' />}
						onClick={() => setIsBlackjackModalOpen(true)}
					>
						Ultimate Blackjack
					</List.Item>
					<List.Item
						icon={<Shell32167 variant='32x32_4' />}
						onClick={() => setIsSlotsModalOpen(true)}
					>
						Double-X Slots
					</List.Item>
				</List>
			}
		/>
	)
}

export default TaskBar95
