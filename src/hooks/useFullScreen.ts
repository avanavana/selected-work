import { useCallback, useEffect, useState } from 'react'

import { useKeyDown } from '@/hooks/useKeyDown'

interface FullScreenDocument extends Document {
  mozCancelFullScreen?: () => Promise<void> | void
  mozFullScreenElement?: Element | null
  msExitFullscreen?: () => Promise<void> | void
  msFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
  webkitFullscreenElement?: Element | null
}

interface FullScreenElement extends HTMLDivElement {
  mozRequestFullScreen?: () => Promise<void> | void
  msRequestFullscreen?: () => Promise<void> | void
  webkitRequestFullscreen?: () => Promise<void> | void
}

const useFullScreen = (ref: React.RefObject<HTMLDivElement>) => {
  const [ isFullScreen, setIsFullScreen ] = useState(false)
  const fullScreenDocument = document as FullScreenDocument

  const getFullScreenElement = useCallback((): Element | null => {
    return (
      fullScreenDocument.fullscreenElement ||
      fullScreenDocument.webkitFullscreenElement ||
      fullScreenDocument.mozFullScreenElement ||
      fullScreenDocument.msFullscreenElement ||
      null
    )
  }, [ fullScreenDocument ])

  const requestFullScreen = useCallback(() => {
    if (!ref.current) return

    plausible('gallery-fullscreen-requested')

    const fullScreenElement = ref.current as FullScreenElement

    if (fullScreenElement.requestFullscreen) {
      fullScreenElement.requestFullscreen()
    } else if (fullScreenElement.webkitRequestFullscreen) {
      fullScreenElement.webkitRequestFullscreen()
    } else if (fullScreenElement.mozRequestFullScreen) {
      fullScreenElement.mozRequestFullScreen()
    } else if (fullScreenElement.msRequestFullscreen) {
      fullScreenElement.msRequestFullscreen()
    }
  }, [ ref ])

  const exitFullScreen = useCallback(() => {
    if (fullScreenDocument.exitFullscreen) {
      fullScreenDocument.exitFullscreen()
    } else if (fullScreenDocument.webkitExitFullscreen) {
      fullScreenDocument.webkitExitFullscreen()
    } else if (fullScreenDocument.mozCancelFullScreen) {
      fullScreenDocument.mozCancelFullScreen()
    } else if (fullScreenDocument.msExitFullscreen) {
      fullScreenDocument.msExitFullscreen()
    }
  }, [ fullScreenDocument ])

  const toggleFullScreen = useCallback(() => {
    if (getFullScreenElement()) {
      exitFullScreen()
    } else {
      requestFullScreen()
    }
  }, [ exitFullScreen, getFullScreenElement, requestFullScreen ])

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
  }, [ getFullScreenElement ])

  useKeyDown('Enter', requestFullScreen, { condition: !!ref.current && !isFullScreen, modifiers: [ 'Alt' ] })
  useKeyDown('Escape', exitFullScreen, { condition: !!ref.current && isFullScreen })

  return { isFullScreen, toggleFullScreen }
}

export { useFullScreen }
