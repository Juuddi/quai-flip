import { Oislb400DcScanIco, Mshearts1, Shell32167 } from '@react95/icons'
import EmulatorGameModal from './EmulatorGameModal'

export const Blackjack = ({ setIsBlackjackModalOpen }: BlackjackModalProps) => {
	return (
		<EmulatorGameModal
			title='Ultimate Blackjack'
			icon={<Oislb400DcScanIco variant='32x32_4' />}
			closeFunction={() => setIsBlackjackModalOpen(false)}
			link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fultimate-blackjack.jsdos?anonymous=1'
		/>
	)
}

export const Poker = ({ setIsPokerModalOpen }: PokerModalProps) => {
	return (
		<EmulatorGameModal
			title='Poker Galore'
			icon={<Mshearts1 variant='32x32_4' />}
			closeFunction={() => setIsPokerModalOpen(false)}
			link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fpoker-galore.jsdos?anonymous=1'
		/>
	)
}

export const Slots = ({ setIsSlotsModalOpen }: SlotsModalProps) => {
	return (
		<EmulatorGameModal
			title='Slots'
			icon={<Shell32167 variant='32x32_4' />}
			closeFunction={() => setIsSlotsModalOpen(false)}
			link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fslots.jsdos?anonymous=1'
		/>
	)
}
