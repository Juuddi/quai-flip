import { Frame, Button } from '@react95/core'
import { User4 } from '@react95/icons'
import ModalTitle from '../style/ModalTitle'

const Alert = () => {
  return (
    <Frame className='alert-outer-frame' style={{ width: '450px' }}>
      <Frame boxShadow='in' className='alert-inner-frame'>
        <ModalTitle title='Error' button1='?' button2='X' />
        <div className='alert-content-wrapper'>
          <div className='alert-icon-wrapper'>
            <User4 variant='32x32_4' className='alert-icon' />
          </div>
          <div className='alert-text-wrapper'>
            This app uses Pelagus to interact with Quai Network. Please install
            the Pelagus extension and enable it as your default extension wallet
            to continue.
          </div>
        </div>
        <div className='alert-button-wrapper'>
          <Button>
            <a
              href='https://chrome.google.com/webstore/detail/pelagus/gaegollnpijhedifeeeepdoffkgfcmbc'
              target='_blank'
              rel='noreferrer'
              className='alert-button'
            >
              Install
            </a>
          </Button>
        </div>
      </Frame>
    </Frame>
  )
}

export default Alert
