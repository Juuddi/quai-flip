import { Modal, List } from '@react95/core'
import { FlyingThroughSpace100 } from '@react95/icons'
import { themes } from '../utils/constants'

const ThemeModal = ({ setIsThemeModalOpen, setTheme }: ThemeModalProps) => {
  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    localStorage.clear()
    localStorage.setItem('win95theme', theme)
  }

  return (
    <Modal
      title='Theme Selection'
      icon={<FlyingThroughSpace100 variant='32x32_4' />}
      closeModal={() => setIsThemeModalOpen(false)}
      style={{ left: '10%', top: '7%' }}
    >
      <List>
        {themes.map((theme: any) => (
          <List.Item
            key={theme.name}
            onClick={() => handleThemeChange(theme.name)}
            style={{ backgroundColor: theme.color }}
          >
            {theme.name}
          </List.Item>
        ))}
      </List>
    </Modal>
  )
}

export default ThemeModal
