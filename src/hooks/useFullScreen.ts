import { useCallback, useEffect, useState } from 'react'

import { useKeyDown } from '@/hooks/useKeyDown'

const useFullScreen = (ref: React.RefObject<HTMLDivElement>) => {
  const [ isFullScreen, setIsFullScreen ] = useState(false)

  const getFullScreenElement = (): Element | null => {
    return (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement ||
      null
    )
  }

  const requestFullScreen = useCallback(() => {
    if (!ref.current) return

    if (ref.current.requestFullscreen) {
      ref.current.requestFullscreen()
    } else if ((ref.current as any).webkitRequestFullscreen) {
      (ref.current as any).webkitRequestFullscreen()
    } else if ((ref.current as any).mozRequestFullScreen) {
      (ref.current as any).mozRequestFullScreen()
    } else if ((ref.current as any).msRequestFullscreen) {
      (ref.current as any).msRequestFullscreen()
    }
  }, [])

  const exitFullScreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen()
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen()
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen()
    }
  }, [])

  const toggleFullScreen = useCallback(() => {
    if (getFullScreenElement()) {
      exitFullScreen()
    } else {
      requestFullScreen()
    }
  }, [ exitFullScreen, requestFullScreen ])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(Boolean(getFullScreenElement()))
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange)
    document.addEventListener('mozfullscreenchange', handleFullScreenChange)
    document.addEventListener('MSFullscreenChange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange)
    }
  }, [])

  useKeyDown('Enter', requestFullScreen, { condition: !!ref.current && !isFullScreen, modifiers: [ 'Alt' ] })
  useKeyDown('Escape', exitFullScreen, { condition: !!ref.current && isFullScreen })

  return { isFullScreen, toggleFullScreen }
}

export { useFullScreen }
