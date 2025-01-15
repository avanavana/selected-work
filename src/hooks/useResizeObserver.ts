import { useEffect, useState } from 'react'

const toRect = (rect: DOMRect | undefined) => {
  const width = rect?.width || 0,
       height = rect?.height || 0,
            x = rect?.x || 0,
            y = rect?.y || 0
              
  return { width, height, x, y }
}

const useResizeObserver = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [ dimensions, setDimensions ] = useState(toRect(ref.current?.getBoundingClientRect()))
    
  useEffect(() => {
    const observer = new ResizeObserver(() => setDimensions(toRect(ref.current?.getBoundingClientRect())))  
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ ref ])
    
  return dimensions
}

export { useResizeObserver }