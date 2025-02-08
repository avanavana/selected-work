import { useEffect, useState } from 'react'

import { preloadImage } from '@/lib/utils'

const useImagePreloader = (imageSources: string[][], isWebPSupported: boolean, preloadCount: number = 3) => {
  const [ imageCache ] = useState(new Map<string, Promise<void>>())

  useEffect(() => {
    Promise.all(imageSources.slice(0, preloadCount).map((sources) => preloadImage(imageCache, sources, isWebPSupported)))
    imageSources.slice(preloadCount).forEach((sources) => preloadImage(imageCache, sources, isWebPSupported))
  }, [ imageSources, preloadCount, isWebPSupported ])

  return imageCache
}

export { useImagePreloader }
