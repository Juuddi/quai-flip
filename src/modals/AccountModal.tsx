import { Modal } from '@react95/core'
import { Mshtml32546 } from '@react95/icons'
import AccountFrame from '../components/functional/AccountFrame'

const AccountModal = ({ setIsAccountModalOpen }: AccountModalProps) => {
	return (
		<Modal
			title='Account Details'
			icon={<Mshtml32546 variant='32x32_4' />}
			closeModal={() => setIsAccountModalOpen(false)}
			style={{ right: '2%', top: '2%' }}
		>
			<AccountFrame />
		</Modal>
	)
}

export default AccountModal
