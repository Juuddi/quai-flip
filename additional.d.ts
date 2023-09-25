import { ExternalProvider } from 'quais'

declare global {
	interface Window {
		ethereum?: ExternalProvider
	}

	interface ModalTitleProps {
		title: string
		button1: string
		button2: string
	}

	interface DesktopButtonProps {
		icon: JSX.Element
		name: string
		onClick: MouseEventHandler<HTMLButtonElement>
	}

	interface DesktopIconsProps {
		setIsModalOpen: Function
		setIsVideoModalOpen: Function
		setIsFlipTableModalOpen: Function
		setIsPokerModalOpen: Function
		setIsBlackjackModalOpen: Function
		setIsSlotsModalOpen: Function
	}

	interface QuaiFlipModalProps {
		setIsModalOpen: Function
		setIsFlipStatusModalOpen: Function
	}

	interface FlipStatusModalProps {
		setIsFlipStatusModalOpen: Function
	}

	interface FlipTableModalProps {
		setIsFlipTableModalOpen: Function
	}

	interface VideoModalProps {
		setIsVideoModalOpen: Function
	}

	interface EmulatorModalProps {
		title: string
		icon: JSX.Element
		closeFunction: (event: MouseEvent<Element, MouseEvent>) => void
		link: string
	}

	interface BlackjackModalProps {
		setIsBlackjackModalOpen: Function
	}

	interface SlotsModalProps {
		setIsSlotsModalOpen: Function
	}

	interface PokerModalProps {
		setIsPokerModalOpen: Function
	}
}
