import { TaskBar, List } from '@react95/core'
import {
	FlyingThroughSpace100,
	Freecell1,
	Mshearts1,
	Oislb400DcScanIco,
	Shell32167,
	Progman24,
	Winpopup3,
	Mshtml32546,
} from '@react95/icons'

const TaskBar95 = ({
	setIsModalOpen,
	setIsVideoModalOpen,
	setIsPokerModalOpen,
	setIsBlackjackModalOpen,
	setIsSlotsModalOpen,
	setIsThemeModalOpen,
	setIsAccountModalOpen,
}: TaskBarProps) => {
	return (
		<TaskBar
			list={
				<List>
					<List.Item
						icon={<Mshtml32546 variant='32x32_4' />}
						onClick={() => setIsAccountModalOpen(true)}
					>
						Account Details
					</List.Item>
					<List.Divider />
					<List.Item
						icon={<Freecell1 variant='32x32_4' />}
						onClick={() => setIsModalOpen(true)}
					>
						QuaiFlip
					</List.Item>
					<List.Divider />
					<List.Item
						icon={<FlyingThroughSpace100 variant='32x32_4' />}
						onClick={() => setIsVideoModalOpen(true)}
					>
						Video Player
					</List.Item>
					<List.Item icon={<Winpopup3 variant='32x32_4' />}>
						<List>
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
						Games
					</List.Item>

					<List.Divider />
					<List.Item
						icon={<Progman24 variant='32x32_4' />}
						onClick={() => setIsThemeModalOpen(true)}
					>
						Set Theme
					</List.Item>
				</List>
			}
		/>
	)
}

export default TaskBar95
