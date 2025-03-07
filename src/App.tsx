import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import { Dialog } from '@/components/Dialog'
import Gallery from '@/components/Gallery'
import { TouchTooltipProvider } from '@/components/TouchTooltip'

import { ThemeProvider } from '@/context/ThemeContext'
import { useDetectWebPSupport } from '@/hooks/useDetectWebPSupport'
import { useDeviceOrientation } from '@/hooks/useDeviceOrientation'
import { useDimensions } from '@/hooks/useDimensions'
import { useImagePreloader } from '@/hooks/useImagePreloader'
import { useKeyDown } from './hooks/useKeyDown'
import { useTimer } from '@/hooks/useTimer'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber, generateImageSources, setAbortableTimeout } from '@/lib/utils'
import { height, width, screens, spacing } from '../tailwind.config'

import data from '@/data/projects.json'
import KeyboardCommand from './components/KeyboardCommand'

const idealContentHeight = extractNumber(height.max) + 70 + extractNumber(spacing.double)
const idealAspectRatio = extractNumber(width.max) / idealContentHeight

const imageSources = generateImageSources(data.projects)

const App: React.FC = () => {
  const isWebPSupported = useDetectWebPSupport()
  const shouldReduceMotion = useReducedMotion()
  const { width: screenWidth, height: screenHeight } = useWindowSize()
  const { ref: wrapperRef, dimensions: wrapperDimensions } = useDimensions<HTMLElement>()
  const { startTimer, stopTimer } = useTimer()
  const [ isMdScreenOrSmaller, setIsMdScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.md))
  const [ hasFlatAspectRatio, setHasFlatAspectRatio ] = useState<boolean>(screenWidth / screenHeight > idealAspectRatio)
  const [ contactInfoMounted, setContactInfoMounted ] = useState<boolean>(false)
  const [ slidesMounted, setSlidesMounted ] = useState<boolean>(false)
  const [ shouldAnimateContactInfo, setShouldAnimateContactInfo ] = useState<boolean>(true)
  const [ introSkipped, setIntroSkipped ] = useState<boolean>(false)
  const [ contactFormOpen, setContactFormOpen ] = useState<boolean>(false)
  const isInitialRenderRef = useRef<boolean>(true)
  const slidesMountedRef = useRef<boolean>(slidesMounted)

  /**
   *  Note: preload images with custom hook, depending on whether *.webp images are supported or not
   */

  useImagePreloader(imageSources, isWebPSupported)

  const handleOpenContactForm = () => {
    setContactFormOpen(true)
    // @ts-ignore
    plausible('contact-form-opened')
  }

  const handleCloseContactForm = () => {
    setContactFormOpen(false)
  }

  /**
   *  Note: for now, if the user rotates their mobile device or otherwise changes the viewport size
   *  during the intro animation sequence, we reload the app, because otherwise the animation
   *  layout is broken.
   */

  const handlePrematureScreenChange = () => {
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false
      return
    }

    if (!slidesMountedRef.current) window.location.reload()
  }

  const handleSkipIntro = () => {
    setIntroSkipped(true)
    setContactInfoMounted(true)
    setSlidesMounted(true)
    setShouldAnimateContactInfo(true)
    const duration = stopTimer()
    // @ts-ignore
    plausible('intro-skipped', { props: { 'intro-skipped-after': isNaN(duration) ? null : duration / 1000 }})
  }

  useDeviceOrientation(handlePrematureScreenChange)
  useWindowSize(handlePrematureScreenChange)

  useEffect(() => {
    slidesMountedRef.current = slidesMounted
  }, [ slidesMounted ])

  /**
   *  Note: start timer when app mounts (used for measuring how long users watch the intro animation)
   */

  useEffect(() => {
    startTimer()
  }, [])

  /**
   *  Note: set timers based on key points in the intro animation sequence and use them to
   *  conditionally mount various child components and set conditional styles
   */

  useEffect(() => {
    if (!shouldReduceMotion && !introSkipped) {
      const controller = new AbortController()
      const { signal } = controller

      setAbortableTimeout(() => {
        setContactInfoMounted(true)
      }, 12500, signal)

      setAbortableTimeout(() => {
        setSlidesMounted(true)
        stopTimer()
      }, isMdScreenOrSmaller ? 12500 : 17000, signal)

      setAbortableTimeout(() => {
        setShouldAnimateContactInfo(false)
      }, isMdScreenOrSmaller ? 17000 : 21500, signal)

      return () => controller.abort()
    } else {
      setContactInfoMounted(true)
      setSlidesMounted(true)
      setShouldAnimateContactInfo(false)
    }
  }, [ introSkipped ])

  useEffect(() => {
    setIsMdScreenOrSmaller(screenWidth <= extractNumber(screens.md))
  }, [ screenWidth ])

  useEffect(() => {
    setHasFlatAspectRatio(screenWidth / screenHeight > idealAspectRatio)
  }, [ screenWidth, screenHeight ])

  useKeyDown('Enter', handleSkipIntro, { condition: !slidesMounted })

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion='user'>
        <TouchTooltipProvider>
          <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
            <div className={cn('w-screen min-w-80 h-full flex justify-center', slidesMounted ? 'items-start sm:items-center max-height:items-start' : 'items-center overflow-hidden', { 'sm:items-start': hasFlatAspectRatio && screenHeight < idealContentHeight })}>
              <main ref={wrapperRef} id='wrapper' className={cn('w-full max:w-max flex flex-col items-center', slidesMounted ? 'justify-between min-h-auto' : 'justify-center min-h-full overflow-hidden')}>
                {(shouldReduceMotion || slidesMounted) && (
                  <Gallery
                    contactFormOpen={contactFormOpen}
                    data={data}
                    handleOpenContactForm={handleOpenContactForm}
                    imageSources={imageSources}
                    isWebPSupported={isWebPSupported}
                  />
                )}
                <ContactInfo
                  requiresScroll={wrapperDimensions?.height ? wrapperDimensions?.height + 38 > screenHeight : false}
                  showContactInfo={shouldReduceMotion || contactInfoMounted}
                  handleOpenContactForm={handleOpenContactForm}
                  shouldAnimate={shouldAnimateContactInfo}
                  skipIntro={introSkipped}
                  {...(slidesMounted && hasFlatAspectRatio && screenHeight < idealContentHeight && { className: 'max:pb-normal' })}
                />
              </main>
            </div>
            <AnimatePresence>
              {!introSkipped && !slidesMounted && (
                <motion.div className='gallery-bottom-right z-10' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 }}} exit={{ opacity: 0 }}>
                  <Button variant='form' className='bg-gray-800/50 hover:bg-gray-800/85 active:bg-gray-800/85 [&_kbd]:text-gray-300 [&_kbd]:!border-gray-300 dark:[&_kbd]:text-gray-500 dark:[&_kbd]:!border-gray-500' onClick={handleSkipIntro}>Skip animation<ArrowRight size={24} strokeWidth={2} /><KeyboardCommand enter /></Button>
                </motion.div>
              )}
            </AnimatePresence>
            <ContactForm open={contactFormOpen} onClose={handleCloseContactForm} />
          </Dialog>
        </TouchTooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
