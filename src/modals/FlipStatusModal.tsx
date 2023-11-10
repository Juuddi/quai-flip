import { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from '../utils/store'
import { Modal, Frame } from '@react95/core'
import { Systray304 } from '@react95/icons'
import { getExplorerURL } from '../utils/helpers'
import GifSwitcher from '../components/style/CoinTakeOff'
import useContract from '../hooks/useContract'

const FlipStatusModal = ({
  setIsFlipStatusModalOpen,
}: FlipStatusModalProps) => {
  console.log('Render')
  const state = useContext(GlobalStateContext)
  const { isFlipping, txHash, account } = state
  const explorerURL = getExplorerURL(account.shard)
  const [gameResult, setGameResult] = useState({
    message: '',
    player: '',
    prize: 0,
    heads: false,
    winner: false,
  })
  const { getReceipt } = useContract()

  useEffect(() => {
    getReceipt(txHash, setGameResult)
    console.log('UseEffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  var winner = ''
  var choice = ''
  var heads = ''
  if (isFlipping.choice) {
    choice = 'Heads'
  } else {
    choice = 'Tails'
  }
  if (gameResult.message !== null) {
    if (gameResult.winner) {
      winner = 'won'
    } else {
      winner = 'lost'
    }
    if (gameResult.heads) {
      heads = 'heads'
    } else {
      heads = 'tails'
    }
  }

  return (
    <Modal
      title='Coin Flip'
      icon={<Systray304 variant='32x32_4' />}
      width='280'
      closeModal={() => setIsFlipStatusModalOpen(false)}
      style={{ left: '63%', top: '6%' }}
    >
      <Frame
        boxShadow='in'
        padding={20}
        style={{
          overflowY: 'auto',
          height: '100%',
        }}
      >
        {isFlipping.flipping ? (
          <div className='spinWrapper'>
            <GifSwitcher />
            <div className='spinText'>
              <h1>
                {isFlipping.bet} QUAI bet on {choice} submitted.
              </h1>
              <a
                href={`${explorerURL}/tx/${txHash}`}
                target='_blank'
                rel='noreferrer'
              >
                View In Explorer
              </a>
            </div>
          </div>
        ) : (
          <div>
            {gameResult.message !== null ? (
              <div className='gameResultWrapper'>
                {heads ? (
                  <div className='coin-spin-wrapper'>
                    <video width='60px' height='60px' autoPlay muted>
                      <source src='/assets/heads_landing.webm' />
                    </video>
                  </div>
                ) : (
                  <div className='coin-spin-wrapper'>
                    <video width='60px' height='60px' autoPlay muted>
                      <source src='/assets/tails_landing.webm' />
                    </video>
                  </div>
                )}
                <div className='gameResult'>
                  <h1>The coin landed on {heads}.</h1>
                  <h1>{gameResult.message}</h1>
                  <h1>
                    You {winner} <strong>{gameResult.prize} QUAI.</strong>
                  </h1>
                </div>
              </div>
            ) : (
              <div className='txRejectWrapper'>
                <div style={{ color: 'red' }}>Transaction Rejected.</div>
                <div>
                  <a
                    href={`${explorerURL}/tx/${txHash}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    View in explorer
                  </a>{' '}
                  for more details.
                </div>
              </div>
            )}
          </div>
        )}
      </Frame>
    </Modal>
  )
}

export default FlipStatusModal
