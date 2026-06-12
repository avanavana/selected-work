import { useEffect, useMemo, useRef } from 'react'

type Callback<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult

function useCallbackRef<TArgs extends unknown[], TResult>(
  callback: Callback<TArgs, TResult> | undefined
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  return useMemo(
    () => ((...args: TArgs) => callbackRef.current?.(...args)) as Callback<TArgs, TResult | undefined>,
    []
  )
}

export { useCallbackRef }
