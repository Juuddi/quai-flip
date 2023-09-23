import { Oislb400DcScanIco, Mshearts1, Shell32167 } from '@react95/icons';
import EmulatorGameModal from './EmulatorGameModal';

export const Blackjack = ({ setIsBlackjackModalOpen }) => {
	return (
		<EmulatorGameModal
			title='Ultimate Blackjack'
			Icon={<Oislb400DcScanIco variant='32x32_4' />}
			CloseFunction={() => setIsBlackjackModalOpen(false)}
			Link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fultimate-blackjack.jsdos?anonymous=1'
		/>
	);
};

export const Poker = ({ setIsPokerModalOpen }) => {
	return (
		<EmulatorGameModal
			title='Poker Galore'
			Icon={<Mshearts1 variant='32x32_4' />}
			CloseFunction={() => setIsPokerModalOpen(false)}
			Link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fpoker-galore.jsdos?anonymous=1'
		/>
	);
};

export const Slots = ({ setIsSlotsModalOpen }) => {
	return (
		<EmulatorGameModal
			title='Slots'
			Icon={<Shell32167 variant='32x32_4' />}
			CloseFunction={() => setIsSlotsModalOpen(false)}
			Link='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fslots.jsdos?anonymous=1'
		/>
	);
};
