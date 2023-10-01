// import { useContext } from 'react'
// import { MetaStateContext } from '../../../utils/store'
import Image from 'next/image'
import { Frame, Button, Input } from '@react95/core'
import { Mprserv120 } from '@react95/icons'
import usePelagus from '../../hooks/usePelagus'
import ModalTitle from '../style/ModalTitle'

const LoginBox = () => {
  // const { provider, isPelagus } = useContext(MetaStateContext)
  // eslint-disable-next-line no-unused-vars
  const { requestAccounts } = usePelagus()
  return (
    <Frame className='login-outer-frame' style={{ width: '450px' }}>
      <Frame boxShadow='in' className='login-inner-frame'>
        <ModalTitle title='Welcome to Quai Casino' button1='?' button2='X' />
        <img
          src='/assets/logonBanner.png'
          alt='login banner'
          className='login-banner'
          style={{ width: '100%', height: '70px' }}
        />
        <div className='login-content-wrapper'>
          <div className='login-main-wrapper'>
            <div className='icon-spacer'>
              <Mprserv120 variant='48x48_4' />
            </div>
            <div className='login-info-wrapper'>
              Connect a wallet to access Quai Casino.
              <div className='login-info'>
                <p>Username:</p>
                <Input placeholder='d3g3ndud3' disabled />
                <p>Password:</p>
                <Input placeholder='************' disabled />
              </div>
            </div>
            <div className='login-button-wrapper'>
              <Button
                className='login-button'
                // disabled={!provider || !isPelagus}
                onClick={requestAccounts}
              >
                Connect
              </Button>
              <Button className='login-button'>Cancel</Button>
            </div>
          </div>
        </div>
      </Frame>
    </Frame>
  )
}

export default LoginBox
