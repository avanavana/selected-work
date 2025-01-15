import * as React from 'react'
import { motion } from 'framer-motion'

import { useResizeObserver } from '@/hooks/useResizeObserver'
import { cn, extractNumber } from '@/lib/utils'
import { width, height } from '../../tailwind.config'

interface GalleryProps {
  className?: string
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const galleryRef = React.useRef<HTMLDivElement>(null)
  const galleryDimensions = useResizeObserver<HTMLDivElement>(galleryRef)
  const aspectRatio = extractNumber(height.maximum) / extractNumber(width.maximum)
  const calculatedHeight = galleryDimensions ? galleryDimensions.width * aspectRatio : extractNumber(height.maximum)

  return (
    <motion.div
      ref={galleryRef}
      id='gallery'
      className={cn('relative w-full maximum:w-maximum overflow-hidden mx-auto bg-gray-light', className)}
      initial={{ height: 0 }}
      animate={{ height: calculatedHeight }}
      transition={{
        duration: 0.75,
        type: 'spring',
        stiffness: 500,
        damping: 20
      }}
      style={{ height: calculatedHeight }}
    >
    </motion.div>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery