import * as React from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { useResizeObserver } from '@/hooks/useResizeObserver'
import { cn, extractNumber } from '@/lib/utils'
import { height, width } from '../../tailwind.config'

import type { EmblaOptionsType } from 'embla-carousel'

const slides = Array.from(Array(10).keys())

const aspectRatio = extractNumber(height.maximum) / extractNumber(width.maximum)

const galleryOptions: EmblaOptionsType = {
  duration: 25,
  loop: true
}

interface GalleryProps {
  className?: string
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [ emblaRef, emblaApi ] = useEmblaCarousel(galleryOptions, [ Autoplay({ delay: 5000 }) ])
  const galleryRef = React.useRef<HTMLDivElement>(null)
  const galleryDimensions = useResizeObserver<HTMLDivElement>(galleryRef)
  const calculatedHeight = galleryDimensions.width * aspectRatio

  const handleMouseEnter = () => {
    if (emblaApi) emblaApi.plugins().autoplay.stop()
  }

  const handleMouseLeave = () => {
    if (emblaApi) emblaApi.plugins().autoplay.play()
  }

  return (
    <motion.section
      ref={galleryRef}
      id='gallery'
      className={cn('relative max-w-maximum w-full maximum:w-maximum overflow-hidden mx-auto', className)}
      initial={{ height: 0 }}
      animate={{ height: calculatedHeight }}
      transition={{
        duration: 0.75,
        type: 'spring',
        stiffness: 500,
        damping: 20
      }}
      style={{ height: calculatedHeight }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex touch-pan-y touch-pinch-zoom -ml-normal'>
          {slides.map((i) => (
            <div className='flex-full min-w-0 pl-normal [transform:translate3d(0,0,0)]' key={i}>
              <div className='flex justify-center items-center text-2xl font-bold select-none bg-gray-light' style={{ height: calculatedHeight }}>{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery