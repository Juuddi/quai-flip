import { useContext } from 'react'
import { GlobalStateContext } from '../utils/store'
import LoginBox from '../components/functional/LoginBox'
import useProvider from '../hooks/useProvider'
import Alert from '../components/functional/Alert'

const DesktopLogin = () => {
  useProvider()
  const { provider, isPelagus } = useContext(GlobalStateContext)
  return (
    <div
      className='login-view-wrapper'
      style={{ backgroundImage: 'url(assets/Clouds.webp)' }}
    >
      <LoginBox />
      {!provider || (!isPelagus && <Alert />)}
    </div>
  )
}

export default DesktopLogin
