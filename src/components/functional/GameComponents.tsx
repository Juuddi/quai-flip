import { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { Input, Fieldset, Checkbox, Button } from '@react95/core'
import { GlobalStateContext } from '../../utils/store'
import { reducetextShowSmallLength } from '../../utils/helpers'
import useContract from '../../hooks/useContract'

export const Bet = ({ setIsFlipStatusModalOpen }: FlipStatusModalProps) => {
  const [isHeads, setIsHeads] = useState(false)
  const [bet, setBet] = useState(0.0001)
  const betAmounts = [0.1, 0.5, 1, 5]
  const { play } = useContract()

  const HandleFlip = () => {
    setIsFlipStatusModalOpen(false)
    play(isHeads, bet, setIsFlipStatusModalOpen)
    console.log('IsHeads', isHeads)
  }

  const HandleCheck = (key: any) => {
    switch (key) {
      case 'heads':
        setIsHeads(true)
        break
      case 'tails':
        setIsHeads(false)
        break
      default:
        break
    }
  }
  return (
    <>
      <Fieldset legend='Choose A Side'>
        <div className='game-choice-selection-wrapper'>
          <Checkbox
            checked={isHeads}
            onChange={() => HandleCheck('heads')}
            label='Heads'
          />
          <Checkbox
            checked={!isHeads}
            onChange={() => HandleCheck('tails')}
            label='Tails'
          />
        </div>
      </Fieldset>
      <Fieldset legend='Enter Your Bet'>
        <div className='game-input-wrapper'>
          <div className='input-button-wrapper'>
            {betAmounts.map((bet: number, index: number) => (
              <Button
                key={index}
                className='input-button'
                onClick={() => setBet(bet)}
              >
                {bet}
              </Button>
            ))}
          </div>
          <Input
            type='number'
            placeholder='0.1'
            className='game-bet-input'
            value={bet}
            onChange={(e: any) => setBet(e.target.value)}
            min='0'
            step='0.1'
          />
          <Button className='game-bet-button' onClick={HandleFlip}>
            <p className='text-gradient'>Flip</p>
          </Button>
        </div>
      </Fieldset>
    </>
  )
}

export const CoinSpin = () => {
  return (
    <div className='coin-spin-wrapper'>
      <Image
        src='/assets/CoinSpin.gif'
        alt='Coin Spinning'
        width={60}
        height={60}
        priority={true}
      />
    </div>
  )
}

export const FlipStats = () => {
  const { contractAddress, account } = useContext(GlobalStateContext)
  const { fetchContractInfo } = useContract()
  const [contractInfo, setContractInfo] = useState({
    gameCount: undefined,
    balance: undefined,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await fetchContractInfo()
        setContractInfo(info)
      } catch (error) {
        console.error('Failed to fetch contract info:', error)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return (
    <Fieldset legend='Contract Details'>
      <div className='flip-stats-wrapper'>
        <div className='flip-stats'>
          <p>
            Total Flips: <strong>{contractInfo.gameCount}</strong>
          </p>
          <p>
            Balance: <strong>{contractInfo.balance} QUAI</strong>
          </p>
          <p>Address: {reducetextShowSmallLength(contractAddress)}</p>
        </div>
      </div>
    </Fieldset>
  )
}
