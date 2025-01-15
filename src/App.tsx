import { useEffect, useRef, useState } from 'react'

import ContactInfo from '@/components/ContactInfo'
import Gallery from '@/components/Gallery'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { screens } from '../tailwind.config'

const App: React.FC = () => {
  const { width: screenWidth } = useWindowSize()
  const isMidSizeScreenOrSmaller = screenWidth <= extractNumber(screens.mid)
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
  
  return (
    <div className={cn('w-screen h-screen flex justify-center', slidesMounted ? 'items-start minimum:items-center max-height:items-start' : 'items-center')}> 
      <div id='wrapper' className={cn('w-full maximum:w-maximum flex flex-col items-center', slidesMounted ? 'justify-between' : 'justify-center')}>
        {slidesMounted && <Gallery />}
        <ContactInfo showContactInfo={contactInfoMounted} />
      </div>
    </div>
  )
}

export default App
