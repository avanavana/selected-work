import { useEffect } from 'react'
import { useCallbackRef } from '@/hooks/useCallbackRef'

type Key = 'ArrowLeft' | 'ArrowRight' | 'Escape' | 'Enter' | 'Space' | 'KeyK' | 'KeyL'
type ModifierKey = 'Alt' | 'Command' |'Control' | 'Meta' | 'Shift'
type EventCallback = (event: Event) => void
type EventTarget = Window | Document | Element

interface EventOptions {
  capture?: boolean
  condition?: boolean
  excludeModifiers?: ModifierKey[]
  modifiers?: ModifierKey[]
  preventDefault?: boolean
  target?: EventTarget
}

const modifiersMap: Map<ModifierKey, string> = new Map([
  [ 'Alt', 'altKey' ],
  [ 'Command', 'metaKey' ],
  [ 'Control', 'ctrlKey' ],
  [ 'Meta', 'metaKey' ],
  [ 'Shift', 'shiftKey' ]
])

const useKeyDown = (key: Key, cb: EventCallback, options: EventOptions = {}) => {
  const {
    capture = true,
    condition = true,
    excludeModifiers = [],
    modifiers = [],
    preventDefault = false,
    target = globalThis?.document
  } = options

  const callbackRef = useCallbackRef(cb)

  useEffect(() => {
    if (!condition) return

    const handleKeyDown = (event: Event) => {
      if (preventDefault) event.preventDefault()

      const isKeyMatch = (event as KeyboardEvent).code === key
      const areModifiersPressed = modifiers.every((m) => (event as KeyboardEvent)[modifiersMap.get(m)! as keyof KeyboardEvent])
      const areExcludedModifiersPressed = excludeModifiers.some((m) => (event as KeyboardEvent)[modifiersMap.get(m)! as keyof KeyboardEvent])

      if (isKeyMatch && areModifiersPressed && !areExcludedModifiersPressed) {
        callbackRef(event as KeyboardEvent)
      }
    }

    target.addEventListener('keydown', handleKeyDown, { capture })

    return () => target.removeEventListener('keydown', handleKeyDown, { capture })
  }, [ callbackRef, condition, target ])
}

export { useKeyDown }
