import { useEffect, useRef } from 'react'

import { preloadImage } from '@/lib/utils'

const useImagePreloader = (imageSources: string[][], isWebPSupported: boolean, preloadCount: number = 3) => {
  const imageCacheRef = useRef(new Map<string, Promise<void>>())

  useEffect(() => {
    Promise.all(imageSources.slice(0, preloadCount).map((sources) => preloadImage(imageCacheRef.current, sources, isWebPSupported)))
    imageSources.slice(preloadCount).forEach((sources) => preloadImage(imageCacheRef.current, sources, isWebPSupported))
  }, [ imageSources, isWebPSupported, preloadCount ])

  return imageCacheRef.current
}

export { useImagePreloader }
