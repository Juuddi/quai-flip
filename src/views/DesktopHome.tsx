import { useState, Dispatch, SetStateAction } from 'react'
import QuaiFlipModal from '../modals/QuaiFlipModal'
import TaskBarMain from '../components/functional/TaskBar'
import VideoModal from '../modals/VideoModal'
// import FlipTableModal from '../modals/FlipTableModal'
import DesktopIcons from '../components/style/DesktopIcons/Container'
import FlipStatusModal from '../modals/FlipStatusModal'
import ThemeModal from '../modals/ThemeModal'
import AccountModal from '../modals/AccountModal'
import { Poker, Blackjack, Slots } from '../modals/EmulatorGameModal/index'

const DesktopHome = ({
  setTheme,
}: {
  setTheme: Dispatch<SetStateAction<string>>
}) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  // const [isFlipTableModalOpen, setIsFlipTableModalOpen] = useState(true)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isPokerModalOpen, setIsPokerModalOpen] = useState(false)
  const [isBlackjackModalOpen, setIsBlackjackModalOpen] = useState(false)
  const [isSlotsModalOpen, setIsSlotsModalOpen] = useState(false)
  const [isFlipStatusModalOpen, setIsFlipStatusModalOpen] = useState(false)
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false)
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(true)

  return (
    <>
      {isModalOpen && (
        <QuaiFlipModal {...{ setIsModalOpen, setIsFlipStatusModalOpen }} />
      )}
      {/* {isFlipTableModalOpen && <FlipTableModal {...{ setIsFlipTableModalOpen }} />} */}
      {isVideoModalOpen && <VideoModal {...{ setIsVideoModalOpen }} />}
      {isPokerModalOpen && <Poker {...{ setIsPokerModalOpen }} />}
      {isBlackjackModalOpen && <Blackjack {...{ setIsBlackjackModalOpen }} />}
      {isSlotsModalOpen && <Slots {...{ setIsSlotsModalOpen }} />}
      {isFlipStatusModalOpen && (
        <FlipStatusModal {...{ setIsFlipStatusModalOpen }} />
      )}
      {isThemeModalOpen && (
        <ThemeModal {...{ setTheme, setIsThemeModalOpen }} />
      )}
      {isAccountModalOpen && <AccountModal {...{ setIsAccountModalOpen }} />}
      <TaskBarMain
        {...{
          setIsModalOpen,
          setIsVideoModalOpen,
          setIsPokerModalOpen,
          setIsBlackjackModalOpen,
          setIsSlotsModalOpen,
          setIsThemeModalOpen,
          setIsAccountModalOpen,
          setTheme,
        }}
      />
      <DesktopIcons
        {...{
          setIsModalOpen,
          setIsVideoModalOpen,
          setIsPokerModalOpen,
          setIsBlackjackModalOpen,
          setIsSlotsModalOpen,
        }}
      />
    </>
  )
}

export default DesktopHome
