import { useState, Dispatch, SetStateAction } from 'react'
import QuaiFlipModal from '../modals/QuaiFlipModal'
import TaskBarMain from '../components/functional/TaskBar'
import VideoModal from '../modals/VideoModal'
import FlipTableModal from '../modals/FlipTableModal'
import DesktopIcons from '../components/style/DesktopIcons/Container'
import FlipStatusModal from '../modals/FlipStatusModal'
import ThemeModal from '../modals/ThemeModal'
import { Poker, Blackjack, Slots } from '../modals/EmulatorGameModal/index'

const DesktopHome = ({ setTheme }: { setTheme: Dispatch<SetStateAction<string>> }) => {
	const [isModalOpen, setIsModalOpen] = useState(true)
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
	const [isFlipTableModalOpen, setIsFlipTableModalOpen] = useState(true)
	const [isPokerModalOpen, setIsPokerModalOpen] = useState(false)
	const [isBlackjackModalOpen, setIsBlackjackModalOpen] = useState(false)
	const [isSlotsModalOpen, setIsSlotsModalOpen] = useState(false)
	const [isFlipStatusModalOpen, setIsFlipStatusModalOpen] = useState(false)
	const [isThemeModalOpen, setIsThemeModalOpen] = useState(false)

	return (
		<>
			{isFlipTableModalOpen && <FlipTableModal {...{ setIsFlipTableModalOpen }} />}
			{isModalOpen && <QuaiFlipModal {...{ setIsModalOpen, setIsFlipStatusModalOpen }} />}
			{isVideoModalOpen && <VideoModal {...{ setIsVideoModalOpen }} />}
			{isPokerModalOpen && <Poker {...{ setIsPokerModalOpen }} />}
			{isBlackjackModalOpen && <Blackjack {...{ setIsBlackjackModalOpen }} />}
			{isSlotsModalOpen && <Slots {...{ setIsSlotsModalOpen }} />}
			{isFlipStatusModalOpen && <FlipStatusModal {...{ setIsFlipStatusModalOpen }} />}
			{isThemeModalOpen && <ThemeModal {...{ setTheme, setIsThemeModalOpen }} />}
			<TaskBarMain
				{...{
					setIsModalOpen,
					setIsVideoModalOpen,
					setIsFlipTableModalOpen,
					setIsPokerModalOpen,
					setIsBlackjackModalOpen,
					setIsSlotsModalOpen,
					setIsThemeModalOpen,
					setTheme,
				}}
			/>
			<DesktopIcons
				{...{
					setIsModalOpen,
					setIsVideoModalOpen,
					setIsFlipTableModalOpen,
					setIsPokerModalOpen,
					setIsBlackjackModalOpen,
					setIsSlotsModalOpen,
				}}
			/>
		</>
	)
}

export default DesktopHome
