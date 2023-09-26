import { GlobalStateContext } from '../src/utils/store'
import { useContext, Dispatch, SetStateAction, useEffect } from 'react'
import DesktopHome from '../src/views/DesktopHome'
import DesktopLogin from '../src/views/DesktopLogin'

export default function Home({ setTheme }: { setTheme: Dispatch<SetStateAction<string>> }) {
	useEffect(() => {
		const theme: any = localStorage.getItem('theme')
		console.log(theme)
		if (theme !== undefined) {
			setTheme(theme)
		} else {
			setTheme('win95')
		}
	})

	const { isConnected } = useContext(GlobalStateContext)
	return <>{isConnected ? <DesktopHome setTheme={setTheme} /> : <DesktopLogin />}</>
}
