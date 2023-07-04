import { useCallback, useEffect, useRef } from 'react'

export function useThrottle (callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false)
  const timeoutRef = useRef<any>(null)

  const throttledCallback = useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
      throttleRef.current = true

      setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [callback, delay])

  useEffect(() => () => {
    clearTimeout(timeoutRef.current)
  }, [])

  return throttledCallback
}
