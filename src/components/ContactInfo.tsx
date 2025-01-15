import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import ContactDivider from '@/components/ContactDivider'
import { Email, Link, LinkedIn } from '@/components/Icons'
import Logo, { LogoSmall } from '@/components/Logo'
import LogoAscii from '@/components/LogoAscii'
import LogoAsciiSmall from '@/components/LogoAsciiSmall'
import LogoOutlines from '@/components/LogoOutlines'
import Tagline from '@/components/Tagline'
import TypedText from '@/components/TypedText'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber,getCurrentQuarter } from '@/lib/utils'
import { colors, height, screens } from '../../tailwind.config'
import { not } from 'three/tsl'

interface ContactInfoProps {
  className?: string
  showContactInfo?: boolean
}

const contactInfoContainerVariants = {
  hidden: { height: 70 },
  visible: {
    height: 376,
    transition: {
      duration: 2,
      staggerChildren: 0.25
    }
  },
  notAnimated: {
    height: 'auto'
  }
}

const contactInfoItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  notAnimated: { opacity: 1, y: 0 }
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className, showContactInfo = true, ...props }) => {
  const { width: screenWidth } = useWindowSize()
  const [ isMidSizeScreenOrSmaller, setIsMidSizeScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.mid))
  const [ isMinimumSizeScreenOrSmaller, setIsMinimumSizeScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.minimum))
  const [ introComplete, setIntroComplete ] = useState<boolean>(false)
  const [ clampedValue, setClampedValue ] = useState<number>(100)
  const [ solidLogoClipPath, setSolidLogoClipPath ] = useState<string>(`polygon(114% 0%, 100% 100%, 0% 100%, 0% 0%)`)
  const [ asciiLogoClipPath, setAsciiLogoClipPath ] = useState<string>(`polygon(100% 0%, 100% 100%, 100% 100%, 114% 0%)`)
  
  const handleMouseMove = ({ clientX, currentTarget }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { width, left } = currentTarget.getBoundingClientRect()
    setClampedValue(Math.min(Math.max(((clientX - left) / width) * 100, -14), 100))
    setSolidLogoClipPath(`polygon(${clampedValue + 14}% 0%, ${clampedValue}% 100%, 0% 100%, 0% 0%)`)
    setAsciiLogoClipPath(`polygon(100% 0%, 100% 100%, ${clampedValue}% 100%, ${clampedValue + 14}% 0%)`)
  }

  const handleMouseLeave = () => {
    const duration = 250
    const distance = 100 - clampedValue
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / (duration * (distance / 100)), 1)
      const newValue = clampedValue + progress * distance
      setClampedValue(newValue)
      setSolidLogoClipPath(`polygon(${newValue + 14}% 0%, ${newValue}% 100%, 0% 100%, 0% 0%)`)
      setAsciiLogoClipPath(`polygon(100% 0%, 100% 100%, ${newValue}% 100%, ${newValue + 14}% 0%)`)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step);
  }

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroComplete(true)
    }, isMidSizeScreenOrSmaller ? 12500 : 17000)

    return () => clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    setIsMidSizeScreenOrSmaller(screenWidth <= extractNumber(screens.mid))
    setIsMinimumSizeScreenOrSmaller(screenWidth <= extractNumber(screens.minimum))
  }, [ screenWidth ])

  return (
    <div id='info' className={cn('flex mid:block relative w-[calc(100%_-_76px)] maximum:w-full mx-normal maximum:mx-0 transition-[justify-content] gap-normal flex-col-reverse mid:!flex-row mid:gap-0', showContactInfo ? 'box-content justify-between' : 'justify-between', introComplete ? '!flex h-auto mid:h-[70px] py-normal maximum:pb-0' : 'py-0', className)} {...props}>
      <motion.div
        id='logo-intro'
        className={cn('relative w-[600px] h-[144px]', showContactInfo ? 'top-0 translate-y-0' : 'top-1/2 -translate-y-1/2', { 'hidden': introComplete })}
        initial={{ height: 144, width: 600, left: '50%', x: '-50%', scale: isMidSizeScreenOrSmaller ? 1 / 2 : 1 }}
        animate={{ height: 212, width: isMidSizeScreenOrSmaller ? 600 : 200, left: isMidSizeScreenOrSmaller ? '50%' : -66.66, x: isMidSizeScreenOrSmaller ? '-50%' : 0, scale: 1 / 3 }}
        transition={{
          height: {
            delay: 9.5,
            duration: 0.5,
            ease: 'easeInOut'
          },
          width: {
            delay: 12,
            duration: 0.5,
            ease: 'easeInOut'
          },
          left: {
            delay: 12,
            duration: 0.5,
            ease: 'easeIn'
          },
          x: {
            delay: 12,
            duration: 0.5,
            ease: 'easeIn'
          },
          scale: {
            delay: 12,
            duration: 0.5,
            ease: 'easeIn'
          }
        }}
      >
        {!introComplete && <Logo className='absolute left-0 top-0' />}
        <LogoOutlines className='absolute left-0 top-0' />
        <LogoAscii className={cn('absolute left-0 top-0', { 'left-1/2 translate-y-1/2 -translate-x-1/2 scale-[2]': isMidSizeScreenOrSmaller })} />
        <Tagline className={cn('absolute left-0', introComplete ? 'hidden bottom-auto top-0 maximum:top-auto maximum:bottom-full' : 'bottom-0 top-auto')} />
      </motion.div>
      {introComplete && (
        <div id='logo' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn('w-[200px] h-[70px] pb-[22px]', introComplete ? 'relative self-center mid:self-start' : 'absolute top-[calc(50%_+_19px)] left-0 -translate-y-1/2')}>
          <LogoSmall className='absolute top-0 left-0' style={{ clipPath: solidLogoClipPath }} />
          <LogoAsciiSmall className='absolute top-0 left-0' style={{ clipPath: asciiLogoClipPath }} />
          <Tagline size='small' animated={false} className='absolute bottom-0 left-0' />
        </div>
      )}
      {showContactInfo && (
        <motion.div
          id='contact'
          className={cn('flex flex-col minimum:flex-row justify-between items-center gap-normal minimum:gap-0 h-auto minimum:h-[108px] mid:!h-[70px] text-sm text-gray-medium [&_a]:transition-colors [&_a:hover]:text-gray-dark [&_>_div]:relative [&_>_div]:text-center [&_>_div]:minimum:text-left', introComplete ? 'border-b-2 mid:border-b-0 pb-normal mid:pb-0' : 'mid:absolute mid:top-1/2 mid:-translate-y-1/2 mid:right-0')}
          initial={isMinimumSizeScreenOrSmaller ? 'hidden' : 'notAnimated'}
          animate={isMinimumSizeScreenOrSmaller ? 'visible' : 'notAnimated'}
          variants={contactInfoContainerVariants}
        >
          <motion.div className='border-b-2 w-full pb-normal minimum:border-0 minimum:w-auto minimum:pb-0' variants={contactInfoItemVariants}>
            <h3 className='text-gray-dark text-[0.98em] font-bold uppercase tracking-[3px]'><TypedText>Avana Vana</TypedText></h3>
            <TypedText as='p' delay={0.25}>Selected Work</TypedText>
            <TypedText as='p' delay={0.5}>{getCurrentQuarter()}</TypedText>
          </motion.div>
          {!isMinimumSizeScreenOrSmaller && <ContactDivider {...(!introComplete && { delay: 3.5 })} />}
          <motion.div className='border-b-2 w-full pb-normal minimum:border-0 minimum:w-auto minimum:pb-0' variants={contactInfoItemVariants}>
            <TypedText as='p' delay={0.75}>Senior Product Designer</TypedText>
            <TypedText as='p' delay={1}>&amp; Full-stack Developer</TypedText>
            <TypedText as='p' delay={1.25}>New York, NY</TypedText>
          </motion.div>
          {!isMinimumSizeScreenOrSmaller && <ContactDivider {...(!introComplete && { delay: 4 })} />}
          <motion.div variants={contactInfoItemVariants}>
            <p className='flex items-center gap-1.5 justify-center minimum:justify-start'><motion.span initial={{ scale: 0.01 }} animate={{ scale: 1 }} transition={{ delay: 1.5, duration: 0.3, type: 'spring', stiffness: 500, damping: 20 }}><Email size={14} color={colors['gray-light']} /></motion.span><a href="javascript:location='mailto:\u0061\u0076\u0061\u006e\u0061\u002e\u0076\u0061\u006e\u0061\u0040\u0070\u006d\u002e\u006d\u0065';void 0" tabIndex={6}><TypedText delay={1.5}>{'\u0061\u0076\u0061\u006e\u0061\u002e\u0076\u0061\u006e\u0061\u0040\u0070\u006d\u002e\u006d\u0065'}</TypedText></a></p>
            <p className='flex items-center gap-1.5 justify-center minimum:justify-start'><motion.span initial={{ scale: 0.01 }} animate={{ scale: 1 }} transition={{ delay: 1.75, duration: 0.3, type: 'spring', stiffness: 500, damping: 20 }}><Link size={14} color={colors['gray-light']} /></motion.span><a href="https://www.avanavana.com" tabIndex={7}><TypedText delay={1.75}>www.avanavana.com</TypedText></a></p>
            <p className='flex items-center gap-1.5 justify-center minimum:justify-start'><motion.span initial={{ scale: 0.01 }} animate={{ scale: 1 }} transition={{ delay: 2, duration: 0.3, type: 'spring', stiffness: 500, damping: 20 }}><LinkedIn size={14} color={colors['gray-light']} /></motion.span><a href="https://www.linkedin.com/in/avanavana" tabIndex={8}><TypedText delay={2}>linkedin.com/in/avanavana</TypedText></a></p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

ContactInfo.displayName = 'ContactInfo'

export default ContactInfo