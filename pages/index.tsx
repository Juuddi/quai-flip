import { GlobalStateContext } from '../src/utils/store'
import { useContext } from 'react'
import DesktopHome from '../src/views/DesktopHome'
import DesktopLogin from '../src/views/DesktopLogin'

export default function Home() {
	const { isConnected } = useContext(GlobalStateContext)
	return <>{isConnected ? <DesktopHome /> : <DesktopLogin />}</>
}
