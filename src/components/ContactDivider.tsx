import { motion } from 'framer-motion'

import { useTheme } from '@/context/ThemeContext'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { colors, screens } from '../../tailwind.config'

interface ContactDividerProps {
  className?: string
  delay?: number
  shouldAnimate?: boolean
}

const ContactDivider: React.FC<ContactDividerProps> = ({ className, delay = 0, shouldAnimate = true, ...props }) => {
  const { resolvedTheme } = useTheme()
  const shouldReduceMotion = usePrefersReducedMotion()
  const dimensions = useWindowSize()
  const isSmScreenOrSmaller = dimensions.width < extractNumber(screens.sm)

  const dividerAnimation = {
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
  }

  return isSmScreenOrSmaller ? (
      <div className={cn('w-full h-[2px] overflow-hidden', className)} {...props}>
        <svg className='w-full' width='100%' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {shouldAnimate ? (
            <>
              <motion.path
                d='M16 0H0'
                stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']}
                strokeWidth={2}
                {...dividerAnimation}
              />
              <motion.path
                d='M16 0H32'
                stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']}
                strokeWidth={2}
                {...dividerAnimation}
              />
            </>
          ) : (
            <>
              <path d='M16 0H0' stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']} strokeWidth={2} />
              <path d='M16 0H32' stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']} strokeWidth={2} />
            </>
          )}
        </svg>
      </div>
    ) : (
      <div className={cn('w-auto md:w-[76px] flex items-center justify-center', className)} {...props}>
        <svg width='32' height='56' viewBox='0 0 32 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {shouldAnimate ? (
           <motion.path
            d='M30.5536.6286 1.4464 55.3714'
            stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']}
            strokeWidth={2}
            {...dividerAnimation}
          />
          ) : (
            <path d='M30.5536.6286 1.4464 55.3714' stroke={resolvedTheme === 'dark' ? colors['gray-700'] : colors['gray-100']} strokeWidth={2} />
          )}
        </svg>
      </div>
    )
}

ContactDivider.displayName = 'ContactDivider'

export default ContactDivider
