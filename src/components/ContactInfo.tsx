import { useEffect, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'

import ContactDivider from '@/components/ContactDivider'
import { Email, Link, LinkedIn } from '@/components/Icons'
import InteractiveLogo from '@/components/InteractiveLogo'
import Logo from '@/components/Logo'
import LogoAscii from '@/components/LogoAscii'
import LogoOutlines from '@/components/LogoOutlines'
import Tagline from '@/components/Tagline'
import TypedText from '@/components/TypedText'

import { useTheme } from '@/context/ThemeContext'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber,getCurrentQuarter } from '@/lib/utils'
import { screens } from '../../tailwind.config'

const contactInfoItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  notAnimated: { opacity: 1, y: 0 }
}

interface ContactInfoItem {
  heading?: boolean
  href?: string
  Icon?: typeof Email | typeof Link | typeof LinkedIn
  onClick?: () => void
  text: string
}

interface ContactInfoProps {
  className?: string
  handleOpenContactForm: () => void
  requiresScroll: boolean
  shouldAnimate: boolean
  showContactInfo?: boolean
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  className,
  handleOpenContactForm,
  requiresScroll,
  shouldAnimate,
  showContactInfo = true,
  ...props
}) => {
  const { resolvedTheme } = useTheme()
  const shouldReduceMotion = usePrefersReducedMotion()
  const { width: screenWidth } = useWindowSize()
  const [ isMdScreenOrSmaller, setIsMdScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.md))
  const [ isSmScreenOrSmaller, setIsSmScreenOrSmaller ] = useState<boolean>(screenWidth < extractNumber(screens.sm))
  const [ introComplete, setIntroComplete ] = useState<boolean>(false)

  useEffect(() => {
    if (shouldReduceMotion) {
      setIntroComplete(true)
    } else {
      const introTimer = setTimeout(() => {
        setIntroComplete(true)
      }, isMdScreenOrSmaller ? 12500 : 17000)

      return () => clearTimeout(introTimer)
    }
  }, [])

  useLayoutEffect(() => {
    setIsMdScreenOrSmaller(screenWidth <= extractNumber(screens.md))
    setIsSmScreenOrSmaller(screenWidth < extractNumber(screens.sm))
  }, [ screenWidth ])

  const content: ContactInfoItem[] = [
    {
      heading: true,
      text: 'Avana Vana'
    },
    { text: 'Selected Work' },
    { text: getCurrentQuarter() },
    { text: 'Senior Product Designer' },
    { text: '& Full-stack Developer' },
    { text: 'New York, NY' },
    {
      Icon: Email,
      onClick: () => handleOpenContactForm(),
      text: 'Get in touch'
    },
    {
      href: 'https://www.avanavana.com',
      Icon: Link,
      text: 'www.avanavana.com'
    },
    {
      href: 'https://www.linkedin.com/in/avanavana',
      Icon: LinkedIn,
      text: 'linkedin.com/in/avanavana'
    }
  ]

  return (
    <section id='info' className={cn('flex md:block relative w-[calc(100%_-_76px)] max:w-full mx-normal max:mx-0 transition-[justify-content] gap-normal flex-col-reverse md:!flex-row md:gap-0', showContactInfo ? 'box-content justify-between' : 'justify-between', introComplete ? '!flex h-auto md:h-[70px] py-normal max:pb-0' : 'py-0', { 'pb-0': !requiresScroll }, className)} {...props}>
      {!shouldReduceMotion && (
        <motion.div
          id='logo-intro'
          className={cn('relative w-[600px] h-[144px]', showContactInfo ? 'top-0 translate-y-0' : 'top-1/2 -translate-y-1/2', { 'hidden': introComplete })}
          initial={{ height: 144, width: 600, left: '50%', x: '-50%', scale: isMdScreenOrSmaller ? 1 / 2 : 1 }}
          animate={{ height: 212, width: isMdScreenOrSmaller ? 600 : 200, left: isMdScreenOrSmaller ? '50%' : -66.66, x: isMdScreenOrSmaller ? '-50%' : 0, scale: 1 / 3 }}
          transition={{
            height: {
              delay: 9.5,
              duration: 0.5,
              ease: 'easeInOut'
            },
            width: {
              delay: 12,
              duration: 0.5,
              ease: 'easeOut'
            },
            left: {
              delay: 12,
              duration: 0.5,
              ease: 'easeOut'
            },
            x: {
              delay: 12,
              duration: 0.5,
              ease: 'easeOut'
            },
            scale: {
              delay: 12,
              duration: 0.5,
              ease: 'easeOut'
            }
          }}
        >
          {!introComplete && <Logo className={cn('logo absolute left-0 top-0', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-800')} />}
          <LogoOutlines isDarkMode={resolvedTheme === 'dark'} className={cn('logo-outlines absolute left-0', introComplete ? 'top-0' : 'top-0')} />
          <LogoAscii className={cn('logo-ascii absolute left-0 top-0', { 'left-1/2 translate-y-1/2 -translate-x-1/2 scale-[2]': isMdScreenOrSmaller })} />
          <Tagline className={cn('tagline absolute left-0', introComplete ? 'hidden bottom-auto top-0 max:top-auto max:bottom-full' : 'bottom-0 top-auto')} />
        </motion.div>
      )}
      <InteractiveLogo
        isDarkMode={resolvedTheme === 'dark'}
        className={cn('interactive-logo', introComplete ? 'self-center md:self-start' : 'absolute top-[calc(50%_+_19px)] left-0 -translate-y-1/2')}
        shouldReduceMotion={shouldReduceMotion}
        visible={introComplete}
      />
      {showContactInfo && (
        <div
          id='contact'
          className={cn('relative flex flex-col sm:flex-row justify-between items-center gap-normal sm:gap-0 h-auto sm:h-[108px] md:!h-[70px] !text-mobile-menu leading-mobile-menu sm:!text-sm sm:leading-none [&_a_svg]:size-mobile-menu-icon [&_a_svg]:sm:size-3.5 text-gray-600 dark:text-gray-500 [&_a_svg]:transition-all [&_a_svg]:text-gray-300 dark:[&_a_svg]:text-gray-600 dark:[&_a:hover_svg]:text-white [&_a:hover_svg]:text-gray-800 [&_a]:transition-colors [&_a:hover]:text-gray-800 dark:[&_a:hover]:text-white [&_>_div]:relative [&_>_div]:text-center [&_>_div]:sm:text-left', introComplete ? 'sm:pb-normal sm:after:absolute sm:after:bottom-0 sm:after:content-[""] sm:after:block sm:after:w-0 sm:after:h-[2px] sm:after:bg-border sm:after:animate-center-divider md:after:hidden md:pb-0' : 'md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0')}
        >
          <motion.div className='w-full sm:w-auto sm:pb-0' variants={contactInfoItemVariants}>
            {content.slice(0, 3).map(({ heading, text }, i) => (
              heading ? (
                <h3 key={`contact-info-item-col-1-${i}`} className='text-gray-800 dark:text-white text-[0.98em] font-bold uppercase tracking-[3px]'>
                  {shouldReduceMotion ? <span>{text}</span> : <TypedText delay={i * 0.25}>{text}</TypedText>}
                </h3>
              ) : (
                shouldReduceMotion ? <p key={`contact-info-item-col-1-${i}`}>{text}</p> : <TypedText key={`contact-info-item-col-1-${i}`} as='p' delay={i * 0.25}>{text}</TypedText>
              )
            ))}
          </motion.div>
          {isSmScreenOrSmaller ? (
            <motion.div
              className='h-0.5 bg-border mx-auto'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                delay: 0.75,
                duration: 0.5,
                ease: 'easeInOut'
              }}
            />
          ) : (
            <ContactDivider delay={3.5} shouldAnimate={shouldAnimate} />
          )}
          <motion.div className='w-full sm:w-auto sm:pb-0' variants={contactInfoItemVariants}>
            {content.slice(3, 6).map(({ text }, i) => (
              shouldReduceMotion ? <p key={`contact-info-item-col-2-${i}`}>{text}</p> : <TypedText key={`contact-info-item-col-2-${i}`} as='p' delay={(i + 3) * 0.25}>{text}</TypedText>
            ))}
          </motion.div>
          {isSmScreenOrSmaller ? (
            <motion.div
              className='h-0.5 bg-border mx-auto'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                delay: 1.25,
                duration: 0.5,
                ease: 'easeInOut'
              }}
            />
          ) : (
            <ContactDivider delay={4} shouldAnimate={shouldAnimate} />
          )}
          <motion.div variants={contactInfoItemVariants}>
            {content.slice(-3).map(({ href, Icon, onClick, text }, i) => (
              <a
                key={`contact-info-item-${i}`}
                className='flex items-center gap-mobile-menu-gap sm:gap-1.5 justify-center sm:justify-start cursor-pointer group'
                {...(href && { href, target: '_blank' })}
                {...(onClick && { onClick })}
              >
                {Icon && (
                  <motion.span
                    className='contact-info-icon group-hover:motion-safe:animate-contact-item-hover'
                    initial={{ opacity: 0, scale: 0.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (i + 6) * 0.25,
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}
                  >
                    <Icon size={14} />
                  </motion.span>
                )}
                {shouldReduceMotion ? <span>{text}</span> : <TypedText delay={(i + 6) * 0.25}>{text}</TypedText>}
              </a>
            ))}
          </motion.div>
          {isSmScreenOrSmaller && (
            <motion.div
              className='h-0.5 bg-border mx-auto'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                delay: 2,
                duration: 0.5,
                ease: 'easeInOut'
              }}
            />
          )}
        </div>
      )}
    </section>
  )
}

ContactInfo.displayName = 'ContactInfo'

export default ContactInfo
