import { useState, useRef, useLayoutEffect } from 'react'

const useDimensions = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)
  const [ dimensions, setDimensions ] = useState<DOMRect | null>(null)

  const updateDimensions = () => {
    if (ref.current) setDimensions(ref.current.getBoundingClientRect())
  }

  useLayoutEffect(() => {
    updateDimensions()

    const handleResize = () => {
      updateDimensions()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ ref.current ])

  return { ref, dimensions }
}

export { useDimensions }
