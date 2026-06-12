import { useCallback, useRef, useState } from 'react'

const useTimer = () => {
  const [ elapsedTime, setElapsedTime ] = useState<number>(0)
  const startTimeRef = useRef<number | null>(null)

  const startTimer = useCallback(() => {
    startTimeRef.current = Date.now()
    setElapsedTime(0)
  }, [])

  const stopTimer = useCallback(() => {
    if (startTimeRef.current) {
      const duration = Date.now() - startTimeRef.current
      setElapsedTime(duration)
      return duration
    }

    return 0
  }, [])

  return { elapsedTime, startTimer, stopTimer }
}

export { useTimer }
