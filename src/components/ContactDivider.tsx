import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { colors, screens } from '../../tailwind.config'

interface ContactDividerProps {
  className?: string
  delay?: number
}

const dividerAnimation = (
  delay: number,
  shouldReduceMotion: boolean | null
) => ({
  variants: {
    start: { pathLength: shouldReduceMotion ? 1 : 0 },
    end: { pathLength: 1 }
  },
  initial: 'start',
  animate: 'end',
  transition: {
    delay,
    duration: 0.25,
    ease: 'easeOut'
  }
})

const ContactDivider: React.FC<ContactDividerProps> = ({ className, delay = 0, ...props }) => {
  const shouldReduceMotion = useReducedMotion()
  const dimensions = useWindowSize()
  const isMobile = dimensions.width <= extractNumber(screens.minimum)

  return isMobile ? (
      <div className={cn('w-full h-[2px] overflow-hidden', className)} {...props}>
        <svg className='w-full' width='100%' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path
            d='M16 0H0'
            stroke={colors['gray-lighter']}
            strokeWidth={2}
            {...dividerAnimation(delay, shouldReduceMotion)}
          />
          <motion.path
            d='M16 0H32'
            stroke={colors['gray-lighter']}
            strokeWidth={2}
            {...dividerAnimation(delay, shouldReduceMotion)}
          />
        </svg>
      </div>
    ) : (
      <div className={cn('w-auto mid:w-[76px] flex items-center justify-center', className)} {...props}>
        <svg width='32' height='56' viewBox='0 0 32 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path
            d='M30.5536.6286 1.4464 55.3714'
            stroke={colors['gray-lighter']}
            strokeWidth={2}
            {...dividerAnimation(delay, shouldReduceMotion)}
          />
        </svg>
      </div>
    )
}

ContactDivider.displayName = 'ContactDivider'

export default ContactDivider
