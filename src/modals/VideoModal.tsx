import { Video, Modal } from '@react95/core'
import { FlyingThroughSpace100 } from '@react95/icons'

const VideoModal = ({ setIsVideoModalOpen }: VideoModalProps) => {
  return (
    <Modal
      title='Video Player'
      icon={<FlyingThroughSpace100 variant='32x32_4' />}
      closeModal={() => setIsVideoModalOpen(false)}
      style={{ left: '10%', top: '7%' }}
    >
      <Video src='assets/Rug.mp4' name='Rug.mp4' style={{ width: '400px' }} />
    </Modal>
  )
}

export default VideoModal
