import { useEffect, useState } from 'react'
import { MotionConfig, useReducedMotion } from 'framer-motion'

import ContactInfo from '@/components/ContactInfo'
import Gallery from '@/components/Gallery'
import { TooltipProvider } from '@/components/Tooltip'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { height, width, screens, spacing } from '../tailwind.config'

const idealContentHeight = extractNumber(height.xl) + 70 + extractNumber(spacing.double)
const idealAspectRatio = extractNumber(width.xl) / idealContentHeight

const App: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const { width: screenWidth, height: screenHeight } = useWindowSize()
  const [ isMdScreenOrSmaller, setIsMdScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.md))
  const [ hasFlatAspectRatio, setHasFlatAspectRatio ] = useState<boolean>(screenWidth / screenHeight > idealAspectRatio)
  const [ contactInfoMounted, setContactInfoMounted ] = useState<boolean>(false)
  const [ slidesMounted, setSlidesMounted ] = useState<boolean>(false)

  useEffect(() => {
    if (!shouldReduceMotion) {
      const contactInfoTimer = setTimeout(() => {
        setContactInfoMounted(true)
      }, 12500)

      const slidesTimer = setTimeout(() => {
        setSlidesMounted(true)
      }, isMdScreenOrSmaller ? 12500 : 17000)

      return () => {
        clearTimeout(contactInfoTimer)
        clearTimeout(slidesTimer)
      }
    }
  }, [])

  useEffect(() => {
    setIsMdScreenOrSmaller(screenWidth <= extractNumber(screens.md))
  }, [ screenWidth ])

  useEffect(() => {
    setHasFlatAspectRatio(screenWidth / screenHeight > idealAspectRatio)
  }, [ screenWidth, screenHeight ])

  return (
    <MotionConfig reducedMotion='user'>
      <TooltipProvider>
        <div className={cn('w-screen h-screen flex justify-center', slidesMounted ? 'items-start sm:items-center xl-height:items-start' : 'items-center', { 'sm:items-start': hasFlatAspectRatio && screenHeight < idealContentHeight })}>
          <main id='wrapper' className={cn('w-full xl:w-xl flex flex-col items-center', shouldReduceMotion || slidesMounted ? 'justify-between' : 'justify-center')}>
            {(shouldReduceMotion || slidesMounted) && <Gallery />}
            <ContactInfo {...(hasFlatAspectRatio && screenHeight < idealContentHeight && { className: 'xl:pb-normal' })} showContactInfo={shouldReduceMotion || contactInfoMounted} />
          </main>
        </div>
      </TooltipProvider>
    </MotionConfig>
  )
}

export default App
