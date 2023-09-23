export interface ModalTitleProps {
	title: string
	button1: string
	button2: string
}

export interface DesktopIconsProps {
	setIsModalOpen: Function
	setIsVideoModalOpen: Function
	setIsFlipTableModalOpen: Function
	setIsPokerModalOpen: Function
	setIsBlackjackModalOpen: Function
	setIsSlotsModalOpen: Function
}

export interface QuaiFlipModalProps {
	setIsModalOpen: Function
	setIsFlipStatusModalOpen: Function
}

export interface FlipStatusModalProps {
	setIsFlipStatusModalOpen: Function
}

export interface FlipTableModalProps {
	setIsFlipTableModalOpen: Function
}

export interface VideoModalProps {
	setIsVideoModalOpen: Function
}
