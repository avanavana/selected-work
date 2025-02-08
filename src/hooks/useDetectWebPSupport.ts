import { useEffect, useState } from 'react'

export const useDetectWebPSupport = () => {
  const [ isWebPSupported, setIsWebPSupported ] = useState<boolean>(false)

  useEffect(() => {
    const detectWebPSupport = () => {
      const canvas = document.createElement('canvas')
      setIsWebPSupported(canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0)
    }

    detectWebPSupport()
  }, [])

  return isWebPSupported
}
