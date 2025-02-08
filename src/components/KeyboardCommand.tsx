import { useDetectTouchscreen } from '@/hooks/useDetectTouchscreen'

interface KeyboardCommandProps {
  alt?: boolean
  command?: boolean
  ctrl?: boolean
  down?: boolean
  enter?: boolean
  esc?: boolean
  keys?: string[]
  left?: boolean
  option?: boolean
  right?: boolean
  shift?: boolean
  space?: boolean
  tab?: boolean
  up?: boolean
}

const KeyboardCommand: React.FC<KeyboardCommandProps> = ({
  alt,
  command,
  ctrl,
  down,
  enter,
  esc,
  keys,
  left,
  option,
  right,
  shift,
  space,
  tab,
  up,
  ...props
}) => {
  const isTouchscreen = useDetectTouchscreen()

  return !isTouchscreen && (
    <span className='kbd-cmd font-mono relative -top-[0.5px] -mr-[2px] inline-block [&_kbd]:border [&_kbd]:border-gray-500 [&_kbd]:rounded-[3px] [&_kbd]:px-1 [&_kbd]:py-0.5 [&_kbd]:mr-1 [&_kbd:last-child]:mr-0 text-3xs font-bold text-gray-500' {...props}>
      {command && <kbd>⌘</kbd>}
      {ctrl && <kbd>⌃</kbd>}
      {alt || option && <kbd>⌥</kbd>}
      {shift && <kbd>⇧</kbd>}
      {space && <kbd>space</kbd>}
      {tab && <kbd>tab</kbd>}
      {enter && <kbd>enter</kbd>}
      {esc && <kbd>esc</kbd>}
      {left && <kbd>←</kbd>}
      {right && <kbd>→</kbd>}
      {up && <kbd>↑</kbd>}
      {down && <kbd>↓</kbd>}
      {keys?.map((key, i) => <kbd key={i}>{key}</kbd>)}
    </span>
  )
}

KeyboardCommand.displayName = 'KeyboardCommand'

export default KeyboardCommand
