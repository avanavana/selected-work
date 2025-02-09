import { useState, useRef } from 'react'

const useTimer = () => {
  const [ elapsedTime, setElapsedTime ] = useState<number>(0)
  const startTimeRef = useRef<number | null>(null)

  const startTimer = () => {
    startTimeRef.current = Date.now()
    setElapsedTime(0)
  }

  const stopTimer = () => {
    if (startTimeRef.current) {
      const duration = Date.now() - startTimeRef.current
      setElapsedTime(duration)
      return duration
    }

    return 0
  }

  return { elapsedTime, startTimer, stopTimer }
}

export { useTimer }
