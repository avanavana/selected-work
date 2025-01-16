import { useEffect, useState } from 'react'

import ContactInfo from '@/components/ContactInfo'
import Gallery from '@/components/Gallery'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { height, width, screens, spacing } from '../tailwind.config'

const idealAspectRatio = extractNumber(width.maximum) / (extractNumber(height.maximum) + 70 + extractNumber(spacing.double))

const App: React.FC = () => {
  const { width: screenWidth, height: screenHeight } = useWindowSize()
  const [ isMidSizeScreenOrSmaller, setIsMidSizeScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.mid))
  const [ hasFlatAspectRatio, setHasFlatAspectRatio ] = useState<boolean>(screenWidth / screenHeight > idealAspectRatio)
  const [ contactInfoMounted, setContactInfoMounted ] = useState<boolean>(false)
  const [ slidesMounted, setSlidesMounted ] = useState<boolean>(false)

  useEffect(() => {
    const contactInfoTimer = setTimeout(() => {
      setContactInfoMounted(true)
    }, 12500)

    const slidesTimer = setTimeout(() => {
      setSlidesMounted(true)
    }, isMidSizeScreenOrSmaller ? 12500 : 17000)

    return () => {
      clearTimeout(contactInfoTimer)
      clearTimeout(slidesTimer)
    }
  }, [])

  useEffect(() => {
    setIsMidSizeScreenOrSmaller(screenWidth <= extractNumber(screens.mid))
  }, [ screenWidth ])

  useEffect(() => {
    setHasFlatAspectRatio(screenWidth / screenHeight > idealAspectRatio)
  }, [ screenWidth, screenHeight ])
  
  return (
    <div className={cn('w-screen h-screen flex justify-center', slidesMounted ? 'items-start minimum:items-center max-height:items-start' : 'items-center')}> 
      <main id='wrapper' className={cn('w-full maximum:w-maximum flex flex-col items-center', slidesMounted ? 'justify-between' : 'justify-center')}>
        {slidesMounted && <Gallery />}
        <ContactInfo showContactInfo={contactInfoMounted} />
      </main>
    </div>
  )
}

export default App
