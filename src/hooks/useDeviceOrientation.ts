import { useEffect, useState } from 'react'

type Orientation = 'portrait' | 'landscape'

const useDeviceOrientation = (onChange?: (newOrientation: Orientation) => void) => {
  const getOrientation = () =>
    window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape'

  const [ orientation, setOrientation ] = useState<Orientation>(getOrientation())

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = getOrientation()
      setOrientation(newOrientation)
      if (onChange) onChange(newOrientation)
    }

    const mediaQuery = window.matchMedia('(orientation: portrait)')
    mediaQuery.addEventListener('change', handleOrientationChange)

    return () => {
      mediaQuery.removeEventListener('change', handleOrientationChange)
    }
  }, [ onChange ])

  return orientation
}

export { useDeviceOrientation }
