import { useEffect, useState } from 'react'

import ContactInfo from '@/components/ContactInfo'
import Gallery from '@/components/Gallery'

import { cn } from '@/lib/utils'

const App: React.FC = () => {
  const [ contactInfoMounted, setContactInfoMounted ] = useState<boolean>(false)
  const [ slidesMounted, setSlidesMounted ] = useState<boolean>(false)

  useEffect(() => {
    const contactInfoTimer = setTimeout(() => {
      setContactInfoMounted(true)
    }, 12500)

    const slidesTimer = setTimeout(() => {
      setSlidesMounted(true)
    }, 17000)

    return () => {
      clearTimeout(contactInfoTimer)
      clearTimeout(slidesTimer)
    }
  }, [])
  
  return (
    <div className='w-screen h-screen flex justify-center items-center max-height:items-start'>
      <div id='wrapper' className={cn('w-full maximum:w-maximum flex flex-col items-center', slidesMounted ? 'justify-between' : 'justify-center')}>
        {slidesMounted && <Gallery />}
        <ContactInfo showContactInfo={contactInfoMounted} />
      </div>
    </div>
  )
}

export default App
