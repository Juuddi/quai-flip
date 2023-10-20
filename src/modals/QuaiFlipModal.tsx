import { Frame, Modal } from '@react95/core'
import { Freecell1 } from '@react95/icons'
import {
  Bet,
  FlipStats,
} from '../components/functional/GameComponents'

const QuaiFlipModal = ({
  setIsModalOpen,
  setIsFlipStatusModalOpen,
}: QuaiFlipModalProps) => {
  return (
    <Modal
      icon={<Freecell1 variant='32x32_4' />}
      title='QuaiFlip'
      closeModal={() => setIsModalOpen(false)}
      style={{ left: '34%', top: '20%' }}
    >
      <Frame w='400px' boxShadow='in' p='10px'>
        <div className='main-wrapper'>
          <Bet {...{ setIsFlipStatusModalOpen }} />
          <FlipStats />
        </div>
      </Frame>
    </Modal>
  )
}

export default QuaiFlipModal
