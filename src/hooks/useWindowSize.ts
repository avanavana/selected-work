import { useLayoutEffect, useState } from 'react'

import { useCallbackRef } from '@/hooks/useCallbackRef'

interface WindowDimensions {
  width: number
  height: number
}

const useWindowSize = (onChange?: (width: number, height: number) => void) => {
  const onChangeRef = useCallbackRef(onChange)
  const [ dimensions, setDimensions ] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      setDimensions(newDimensions)
      onChangeRef?.(newDimensions.width, newDimensions.height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ onChangeRef ])

  return dimensions
}

export { useWindowSize }
