import { ExternalProvider } from 'quais'
import { themes } from './src/utils/constants'

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
		hover: string
	}

	interface DesktopIconsProps {
		setIsModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsVideoModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsFlipTableModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsPokerModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsBlackjackModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsSlotsModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface TaskBarProps {
		setIsModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsVideoModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsFlipTableModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsPokerModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsBlackjackModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsSlotsModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsThemeModalOpen: Dispatch<SetStateAction<Boolean>>
		setTheme: Dispatch<SetStateAction<string>>
	}

	interface QuaiFlipModalProps {
		setIsModalOpen: Dispatch<SetStateAction<Boolean>>
		setIsFlipStatusModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface FlipStatusModalProps {
		setIsFlipStatusModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface FlipTableModalProps {
		setIsFlipTableModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface VideoModalProps {
		setIsVideoModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface ThemeModalProps {
		setTheme: Dispatch<SetStateAction<string>>
		setIsThemeModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface EmulatorModalProps {
		title: string
		icon: JSX.Element
		closeFunction: (event: MouseEvent<Element, MouseEvent>) => void
		link: string
	}

	interface BlackjackModalProps {
		setIsBlackjackModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface SlotsModalProps {
		setIsSlotsModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	interface PokerModalProps {
		setIsPokerModalOpen: Dispatch<SetStateAction<Boolean>>
	}

	type ThemeName =
		| 'win95'
		| 'counterStrike'
		| 'bee'
		| 'pamelaAnderson'
		| 'azureOrange'
		| 'olive'
		| 'vaporTeal'
		| 'matrix'
		| 'vermillion'
		| 'tooSexy'
		| 'ninjaTurtles'
		| 'tokyoDark'
		| 'molecule'
		| 'travel'
		| 'theSixtiesUSA'
		| 'candy'
		| 'modernDark'
		| 'storm'
		| 'millenium'
		| 'spruce'
		| 'slate'
		| 'rose'
		| 'rainyDay'
		| 'plum'
		| 'marine'
		| 'maple'
		| 'lilac'
		| 'blackAndWhite'
		| 'highContrast'
		| 'eggplant'
		| 'brick'
		| 'water'
		| 'coldGray'
		| 'lilacRoseDark'
		| 'violetDark'
		| undefined

	interface game {
		player: string
		bet: string
		prize: string
		winner: boolean
	}
}
