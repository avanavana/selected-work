import React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { colors } from '../../tailwind.config'

interface ContactDividerProps {
  className?: string
  delay?: number
}

const ContactDivider: React.FC<ContactDividerProps> = ({ className, delay = 0, ...props }) => (
  <div className={cn('w-[76px] flex items-center justify-center', className)} {...props}>
    <svg width='32' height='56' viewBox='0 0 32 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        d='M30.5536.6286 1.4464 55.3714'
        stroke={colors['gray-lighter']}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay,
          duration: 0.25,
          ease: 'easeOut'
        }}
      />
    </svg>
  </div>
)

ContactDivider.displayName = 'ContactDivider'

export default ContactDivider
