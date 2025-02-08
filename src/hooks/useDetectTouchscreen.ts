import { useEffect, useState } from 'react'

const useDetectTouchscreen = () => {
  const [ isTouchscreen, setIsTouchscreen ] = useState<boolean>(true)

  useEffect(() => {
    if (window.PointerEvent && 'maxTouchPoints' in navigator) {
      if (navigator.maxTouchPoints === 0) {
        setIsTouchscreen(false)
      }
    } else {
      if (window.matchMedia && window.matchMedia('(any-pointer: fine)').matches) {
        setIsTouchscreen(false)
      } else if (!window.TouchEvent && !('ontouchstart' in window)) {
        setIsTouchscreen(false)
      }
    }
  }, [])

  return isTouchscreen
}

export { useDetectTouchscreen }
