import { useLayoutEffect, useState } from 'react'

interface WindowDimensions {
  width: number
  height: number
}

const useWindowSize = (onChange?: (width: number, height: number) => void) => {
  const [ dimensions, setDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      setDimensions(newDimensions)
      if (onChange) onChange(newDimensions.width, newDimensions.height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}

export { useWindowSize }
