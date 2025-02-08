import { useState } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface FilterBurgerProps {
  className?: string
  color?: string
  disabled?: boolean
  duration?: number
  options: string[]
  showCount?: boolean
  size?: number
  toggle?: React.Dispatch<React.SetStateAction<boolean>>
  toggled?: boolean
  value: string[]
}

const FilterBurger: React.FC<FilterBurgerProps> = ({
  className,
  color = 'currentColor',
  disabled = false,
  duration = 0.4,
  options,
  showCount = false,
  size = 32,
  toggle,
  toggled,
  value
}) => {
  const [ toggledInternal, toggleInternal ] = useState(false)

  const area = 48
  const lines = 3

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)

  const space = 0.5
  const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)))
  const margin = Math.round(marginRaw)

  const height = barHeight * lines + margin * (lines - 1)
  const topOffset = Math.round((area - height) / 2)

  const time = Math.max(0, duration)
  const easing = 'cubic-bezier(0, 0, 0, 1)'

  const iconStyles: React.CSSProperties = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    height: `${area}px`,
    outline: 'none',
    position: 'relative',
    transition: `${time}s ${easing}`,
    userSelect: 'none',
    width: `${area}px`
  }

  const barStyles: React.CSSProperties = {
    background: color,
    borderRadius: '9em',
    height: `${barHeight}px`,
    left: `${room}px`,
    position: 'absolute'
  }

  const getIsToggled = () => {
    return toggled !== undefined ? toggled : toggledInternal
  }

  const toggleFunction = toggle || toggleInternal
  const isToggled = getIsToggled()

  const handler = () => {
    toggleFunction(!isToggled)
  }

  return (
    <div
      className={cn('filterburger relative', className)}
      aria-label='Animated open/close filter icon'
      aria-expanded={isToggled}
      onClick={disabled ? undefined : handler}
      onKeyUp={disabled ? undefined : (e) => e.key === 'Enter' && handler()}
      role='img'
      style={iconStyles}
    >
      <div
        data-testid='bar-wrap-one'
        style={{
          transition: `${time / 2}s ${easing} ${
            isToggled ? '0s' : `${time / 2}s`
          }`,
          transform: `${
            isToggled ? `translateY(${barHeight + margin}px)` : 'none'
          }`
        }}
      >
        <div
          data-testid='bar-one'
          style={{
            ...barStyles,
            width: `${width}px`,
            top: `${topOffset}px`,
            transition: `${time / 2}s ${easing} ${
              isToggled ? `${time / 2}s` : '0s'
            }`,
            transform: `${isToggled ? `rotate(45deg)` : 'none'}`
          }}
        />
      </div>
      <div
        data-testid='bar-wrap-two'
        style={{
          transition: `${time / 2}s ${easing}`,
          opacity: `${isToggled ? '0' : '1'}`
        }}
      >
        <div
          data-testid='bar-two'
          style={{
            ...barStyles,
            width: `${width * 0.6}px`,
            top: `${topOffset + barHeight + margin}px`,
            left: `50%`,
            transform: `translateX(-50%)`,
            transition: `${time / 2}s ${easing}`
          }}
        />
      </div>

      <div
        data-testid='bar-wrap-three'
        style={{
          transition: `${time / 2}s ${easing} ${
            isToggled ? '0s' : `${time / 2}s`
          }`,
          transform: `${
            isToggled ? `translateY(-${barHeight + margin}px)` : 'none'
          }`
        }}
      >
        <div
          data-testid='bar-three'
          style={{
            ...barStyles,
            width: isToggled ? `${width}px` : `${width * 0.3}px`,
            top: `${topOffset + barHeight * 2 + margin * 2}px`,
            left: `50%`,
            transition: `${time / 2}s ${easing} ${
              isToggled ? `${time / 2}s` : '0s'
            }`,
            transform: `translateX(-50%) ${isToggled ? `rotate(-45deg)` : ''}`
          }}
        />
      </div>
      {value.length < options.length && showCount && (
        <motion.div
          className='absolute -top-2 -right-2 bg-gray-800-translucent-85 text-white rounded-full flex items-center justify-center text-xs size-6'
          initial={{ scale: 0.01 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.3,
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
        >
          {value.length}
        </motion.div>
      )}
    </div>
  )
}

FilterBurger.displayName = 'FilterBurger'

export default FilterBurger
