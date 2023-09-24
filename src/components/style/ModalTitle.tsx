import { TitleBar } from '@react95/core'

const ModalTitle = ({ title, button1, button2 }: ModalTitleProps) => {
	return (
		<TitleBar title={title}>
			<TitleBar.OptionsBox>
				<TitleBar.Option>{button1}</TitleBar.Option>
				<TitleBar.Option>{button2}</TitleBar.Option>
			</TitleBar.OptionsBox>
		</TitleBar>
	)
}

export default ModalTitle
