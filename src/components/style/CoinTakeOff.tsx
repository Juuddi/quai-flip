import Image from 'next/image'

import React, { useState, useEffect } from 'react'

const GifSwitcher = () => {
  const [showFirstGif, setShowFirstGif] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstGif(false)
    }, 1040) // Set timeout for 1.04 seconds

    // Clear the timeout if the component is unmounted before the timer completes
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {showFirstGif ? (
        <div className='coin-spin-wrapper'>
          <Image
            src='/assets/takeoff.gif'
            alt='Coin Spinning'
            width={60}
            height={60}
            priority={true}
          />
        </div>
      ) : (
        <div className='coin-spin-wrapper'>
          <Image
            src='/assets/spinning.gif'
            alt='Coin Spinning'
            width={60}
            height={60}
            priority={true}
          />
        </div>
      )}
    </div>
  )
}

export default GifSwitcher
