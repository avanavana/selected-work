import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Logo from '@/components/Logo'
import LogoAsciiSmall from '@/components/LogoAsciiSmall'
import Tagline from '@/components/Tagline'

import { useDetectTouchscreen } from '@/hooks/useDetectTouchscreen'
import { cn } from '@/lib/utils'

interface InteractiveLogoProps {
  className?: string
  isDarkMode?: boolean
  shouldReduceMotion?: boolean
  visible?: boolean
}

const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ className, isDarkMode = false, shouldReduceMotion = false, visible = true, ...props }) => {
  const isTouchscreen = useDetectTouchscreen()
  const [ clampedMousePositionX, setClampedMousePositionX ] = useState<number>(100)
  const [ solidLogoClipPath, setSolidLogoClipPath ] = useState<string>(`polygon(114% 0%, 100% 100%, 0% 100%, 0% 0%)`)
  const [ asciiLogoClipPath, setAsciiLogoClipPath ] = useState<string>(`polygon(100% 0%, 100% 100%, 100% 100%, 114% 0%)`)
  const [ isInteracting, setIsInteracting ] = useState(false)

  /**
   *  Note: in the two event handlers below, which control interaction with the logo (the revealing and
   *  then re-covering of the ASCII logo with the solid logo), it is important to only render the animated
   *  ASCII logo underneath when the user is actually interacting with the logo, to avoid literally thousands
   *  of unnecessary re-renders.
   */

  const handleMoveLogo = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    if (isTouchscreen && 'touches' in event) {
      const touch = event.touches[0]
      if (!touch) return
      event = { clientX: touch.clientX, currentTarget: event.currentTarget } as React.MouseEvent<HTMLDivElement>
    } else if (!('clientX' in event)) {
      return
    }

    const { width, left } = event.currentTarget.getBoundingClientRect()
    setClampedMousePositionX(Math.min(Math.max(((event.clientX - left) / width) * 100, -14), 100))
    setSolidLogoClipPath(`polygon(${clampedMousePositionX + 14}% 0%, ${clampedMousePositionX}% 100%, 0% 100%, 0% 0%)`)
    setAsciiLogoClipPath(`polygon(100% 0%, 100% 100%, ${clampedMousePositionX}% 100%, ${clampedMousePositionX + 14}% 0%)`)
    setIsInteracting(true)
  }

  const handleLeaveLogo = () => {
    const duration = 250
    const distance = 100 - clampedMousePositionX
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / (duration * (distance / 100)), 1)
      const newValue = clampedMousePositionX + progress * distance
      setClampedMousePositionX(newValue)
      setSolidLogoClipPath(`polygon(${newValue + 14}% 0%, ${newValue}% 100%, 0% 100%, 0% 0%)`)
      setAsciiLogoClipPath(`polygon(100% 0%, 100% 100%, ${newValue}% 100%, ${newValue + 14}% 0%)`)

      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
    setIsInteracting(false)


    // @ts-ignore
    plausible('interactive-logo-revealed')
  }

  return !shouldReduceMotion ? (
    visible && (
      <div
        id='logo'
        className={cn('relative w-[200px] h-[70px] pb-[22px]', className)}
        onMouseMove={handleMoveLogo}
        onMouseLeave={handleLeaveLogo}
        onTouchMove={handleMoveLogo}
        onTouchEnd={handleLeaveLogo}
      >
        <Logo size='sm' className='absolute top-0 left-0 text-gray-800 dark:text-white' style={{ clipPath: solidLogoClipPath }} />
        <LogoAsciiSmall animated={isInteracting} className='absolute top-0 left-0 text-gray-800 dark:text-white' style={{ clipPath: asciiLogoClipPath }} />
        <Tagline size='sm' animated={false} className='absolute bottom-0 left-0' />
      </div>
    )
  ) : (
    <motion.div
      id='logo'
      className={cn('relative w-[200px] h-[70px] pb-[22px]', className)}
      initial='hidden'
      whileHover='hover'
    >
      <motion.div
        className='absolute top-0 left-0 pointer-events-none'
        variants={{
          hidden: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.25 }}
      >
        <Logo size='sm' className='text-gray-800 dark:text-white' />
      </motion.div>
      <motion.div
        className='absolute top-0 left-0 text-gray-800 pointer-events-none'
        variants={{
          hidden: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
      >
        <LogoAsciiSmall animated={false} className='text-gray-800 dark:text-white' />
      </motion.div>
      <Tagline size='sm' animated={false} className='absolute bottom-0 left-0' />
    </motion.div>
  )
}

InteractiveLogo.displayName = 'InteractiveLogo'

export default InteractiveLogo
