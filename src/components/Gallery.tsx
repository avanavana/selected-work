import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Squash as Hamburger } from 'hamburger-react'
import { ChevronLeft, ChevronRight, CircleUserRound, Icon, MousePointerClick, Paperclip, Pause, Play, X } from 'lucide-react'
import { textSquare } from '@lucide/lab'

import { Button } from '@/components/Button'
import { Combobox } from '@/components/Combobox'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogPortal, DialogTitle } from '@/components/Dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Tooltip'

import { useResizeObserver } from '@/hooks/useResizeObserver'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, createFileDownload, extractNumber } from '@/lib/utils'
import { height, screens, width } from '../../tailwind.config'

import data from '@/data/projects.json'

import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'

interface Project {
  id: string
  title: string
  type: string
  date: string
  fullTime: boolean
  client: string
  skills: string
  desc: string
}

const projectCategoriesMap: Record<string, string> = {
  'web/interactive': 'WI',
  'print/illustration': 'PI',
  '3d/environmental': '3E'
} as const

const NextButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button ref={ref} variant='galleryNavigation' className={cn('center-right rounded-l-md', className)} onClick={onClick}><ChevronRight size={48} strokeWidth={1} /></Button>
    </TooltipTrigger>
    <TooltipContent>Next project</TooltipContent>
  </Tooltip>
))

const PreviousButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button ref={ref} variant='galleryNavigation' className={cn('center-left rounded-r-md', className)} onClick={onClick}><ChevronLeft size={48} strokeWidth={1} /></Button>
    </TooltipTrigger>
    <TooltipContent>Previous project</TooltipContent>
  </Tooltip>
))

const CloseDialogButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <DialogClose asChild><Button ref={ref} className={className} onClick={onClick}><X size={24} strokeWidth={2} /></Button></DialogClose>
    </TooltipTrigger>
    <TooltipContent>Close project details</TooltipContent>
  </Tooltip>
))

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
  const { width: screenWidth } = useWindowSize()
  const [ isMidSizeScreenOrSmaller, setIsMidSizeScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.mid))
  const [ isPlaying, setIsPlaying ] = useState<boolean>(true)
  const [ infoModalOpen, setInfoModalOpen ] = useState<boolean>(false)
  const [ showMobileProjectInfo, setShowMobileProjectInfo ] = useState<boolean>(false)
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState<number>(0)
  const [ categories, setCategories ] = useState<string[]>([ 'web/interactive', 'print/illustration', '3d/environmental' ])
  const [ projects, setProjects ] = useState<string[]>(data.projects)
  const [ showAnnouncement, setShowAnnouncement ] = useState<boolean>(true)
  const [ galleryControlsOpen, setGalleryControlsOpen ] = useState<boolean>(false)
  const [ selectCategoriesOpen, setSelectCategoriesOpen ] = useState<boolean>(false)
  const viewProjectDetailsRef = React.useRef<HTMLButtonElement>(null)
  const galleryRef = React.useRef<HTMLDivElement>(null)
  const galleryDimensions = useResizeObserver<HTMLDivElement>(galleryRef)
  const calculatedHeight = galleryDimensions.width * aspectRatio
  const currentProjectDetails: Project = data.details.find(({ id }: Project) => id === projects[currentSlideIndex].substring(0, 4))!

  const handleMouseEnterGallery = () => {
    if (emblaApi) emblaApi.plugins().autoplay.stop()
  }

  const handleMouseLeaveGallery = () => {
    if (emblaApi && isPlaying && !infoModalOpen) emblaApi.plugins().autoplay.play()
  }

  const handleNavigateNextSlide = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const handleNavigateNextProject = () => {
    if (emblaApi) {
      const nextIndex = projects.findIndex((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i > projects.indexOf(projects[currentSlideIndex]))
      emblaApi.scrollTo(nextIndex !== -1 ? nextIndex : 0)
      emblaApi.plugins().autoplay.stop()
    }
  }

  const handleNavigatePreviousSlide = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const handleNavigatePreviousProject = () => {
    if (emblaApi) {
      const previousIndex = projects.findIndex(id => id.substring(0, 4) === (projects.findLast((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i < currentSlideIndex) || projects.at(-1))!.substring(0, 4))
      emblaApi.scrollTo(previousIndex)
      emblaApi.plugins().autoplay.stop()
    }
  }

  const handlePlayPauseSlides = () => {
    if (emblaApi) {
      if (isPlaying) {
        setIsPlaying(false)
        emblaApi.plugins().autoplay.stop()
      } else {
        setIsPlaying(true)
        emblaApi.plugins().autoplay.play()
      }
    }
  }

  const handleResumeClick = () => {
    createFileDownload('avana_vana-resume-2025-Q1.pdf')
  }

  const handlePortfolioClick = () => {
    createFileDownload('avana_vana-selected_work-2025-Q1.pdf')
  }

  const handleOpenInfoModal = () => {
    setInfoModalOpen(true)
    if (emblaApi) emblaApi.plugins().autoplay.stop()
    const body = document.querySelector('body')
    setTimeout(() => { if (body) body.style.pointerEvents = 'unset' }, 10)
  }

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false)
    viewProjectDetailsRef.current?.blur()
    if (emblaApi && isPlaying) emblaApi.plugins().autoplay.play()
  }

  const switchProject = useCallback((emblaApi: EmblaCarouselType) => {
    if (emblaApi) setCurrentSlideIndex(emblaApi.slidesInView()[0])
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', switchProject)
  }, [ emblaApi ])

  useEffect(() => {
    setIsMidSizeScreenOrSmaller(screenWidth <= extractNumber(screens.mid))
  }, [ screenWidth ])

  useEffect(() => {
    if (emblaApi) {
      setProjects(data.projects.filter((p) => categories.map((c: string) => projectCategoriesMap[c]).includes(p.substring(0, 2))))
      emblaApi.reInit()
    }
  }, [ categories, emblaApi ])

  useEffect(() => {
    const announcementExitTimer = setTimeout(() => {
      setShowAnnouncement(false)
    }, 7500)

    return () => clearTimeout(announcementExitTimer)
  }, [])

  return (
    <Dialog open={infoModalOpen} onOpenChange={setInfoModalOpen}>
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
        onMouseEnter={handleMouseEnterGallery}
        onMouseLeave={handleMouseLeaveGallery}
      >
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex touch-pan-y touch-pinch-zoom -ml-normal'>
            {projects.map((id, i) => (
              <div className='flex-full min-w-0 pl-normal [transform:translate3d(0,0,0)]' key={`image-${i.toString().padStart(2, '0')}-${id.substring(0, 4)}`}>
                <div className='flex justify-center items-center text-2xl font-bold select-none bg-transparent' style={{ height: calculatedHeight }}>
                  <img
                    className={cn('w-full', { 'cursor-pointer': isMidSizeScreenOrSmaller })}
                    src={`/src/assets/work/image-${projects[i]}.png`}
                    alt={data.details.find((project: Project) => project.id === id.substring(0, 4))!.title}
                    {...(isMidSizeScreenOrSmaller && { onClick: handleOpenInfoModal })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isMidSizeScreenOrSmaller ? (
          <Button className='button-mobile-menu gallery-top-right z-[60]' onClick={infoModalOpen ? handleCloseInfoModal : handleOpenInfoModal}><Hamburger size={18} toggled={infoModalOpen} /></Button>
            // <div className='absolute top-0 left-0 size-full cursor-pointer z-50' onClick={handleOpenInfoModal}></div>
        ) : (
          <motion.div
            id='gallery-controls'
            className='absolute top-0 left-0 size-full z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: galleryControlsOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setGalleryControlsOpen(true)}
            onMouseLeave={() => {
              setGalleryControlsOpen(false)
              setSelectCategoriesOpen(false)
            }}
          >
            <div className='absolute top-0 left-0 size-full cursor-pointer' onClick={handleOpenInfoModal}></div>
            <PreviousButton className={cn('button-previous transition-[left] duration-500', galleryControlsOpen ? 'left-0' : 'motion-safe:-left-full')} onClick={handleNavigatePreviousSlide} />
            <NextButton className={cn('button-next transition-[right] duration-500', galleryControlsOpen ? 'right-0' : 'motion-safe:-right-full')} onClick={handleNavigateNextSlide} />
            <div className='gallery-top-right flex items-center gap-1.5'>
              <Combobox
                multiple
                value={categories}
                onValueChange={setCategories}
                open={selectCategoriesOpen}
                setOpen={setSelectCategoriesOpen}
                options={[
                  { value: 'web/interactive', label: 'Web/Interactive' },
                  { value: 'print/illustration', label: 'Print/Illustration' },
                  { value: '3d/environmental', label: '3D/Environmental' }
                ]}
              />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className='button-info shrink-0' onClick={handleOpenInfoModal}><Icon iconNode={textSquare} size={24} strokeWidth={2} /></Button>
                </TooltipTrigger>
                <TooltipContent>View project details</TooltipContent>
              </Tooltip>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handlePlayPauseSlides} className='button-play-pause gallery-bottom-left'>{isPlaying ? <Pause size={24} strokeWidth={2} fill='currentColor' /> : <Play size={24} strokeWidth={2} fill='currentColor' />}</Button>
              </TooltipTrigger>
              <TooltipContent>{isPlaying ? 'Pause' : 'Play'}</TooltipContent>
            </Tooltip>
            <div className='gallery-bottom-right flex items-center gap-1.5'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className='button-resume' onClick={handleResumeClick}><CircleUserRound size={24} strokeWidth={2} /></Button>
                </TooltipTrigger>
                <TooltipContent>Download résumé <span className='font-normal text-gray-light'>(61 kB PDF)</span></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className='button-portfolio' onClick={handlePortfolioClick}><Paperclip size={24} strokeWidth={2} /></Button>
                </TooltipTrigger>
                <TooltipContent>Download selected work <span className='font-normal text-gray-light'>(16 MB PDF)</span></TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
        )}
          <AnimatePresence>
            {showAnnouncement && (
              <motion.div
                className='announcement absolute bottom-normal left-1/2 flex gap-1.5 bg-popover text-popover-foreground font-bold px-6 py-4 rounded-md'
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: '-50%',
                  y: 100
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: '-50%',
                  y: 0,
                  transition: { delay: 1.5, duration: 0.5, ease: 'easeInOut' },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: '-50%',
                  y: 100,
                  transition: { duration: 0.25, ease: 'easeInOut' },
                }}
              >
                <MousePointerClick size={24} strokeWidth={2} />
                Tap or click anywhere on the image to view project details
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
        <DialogPortal>
          {!isMidSizeScreenOrSmaller || showMobileProjectInfo ? (
            <DialogContent onEscapeKeyDown={handleCloseInfoModal} onPointerDownOutside={(e) => e.preventDefault()} type='projectDetails'>
              <DialogHeader>
                <DialogTitle
                  className='relative after:content-[""] after:w-0.5 after:h-6 after:block after:bg-gray-lighter after:top-1 after:-right-[18px] after:absolute after:rotate-[28deg]'
                >
                  {currentProjectDetails.title}
                </DialogTitle>
                <span className='relative top-[3px] flex flex-col text-xs whitespace-nowrap leading-3'>
                  <span className='project-type uppercase tracking-[2px]'>{currentProjectDetails.type}</span>
                  <span className='project-date'>{currentProjectDetails.date}</span>
                </span>
              </DialogHeader>
              <div className='info-body flex flex-col gap-normal'>
                <div className='info-metadata flex flex-row gap-normal'>
                  <div className='info-client w-[200px]'>
                    <h3>{currentProjectDetails.fullTime ? 'With' : 'For'}</h3>
                    <DialogDescription>{currentProjectDetails.client}</DialogDescription>
                  </div>
                  <div className='info-skills'>
                    <h3>Skills</h3>
                    <p>{currentProjectDetails.skills}</p>
                  </div>
                </div>
                <div className={cn('info-text [&_p]:mb-6 [&_p:last-child]:mb-0', { 'columns-2': currentProjectDetails.desc.length > 1000 })} dangerouslySetInnerHTML={{ __html: currentProjectDetails.desc }}></div>
              </div>
            </DialogContent>
          ) : (
            <DialogContent onEscapeKeyDown={handleCloseInfoModal} onPointerDownOutside={(e) => e.preventDefault()} type='projectDetails'>
              Mobile Menu
            </DialogContent>
          )}
          {!isMidSizeScreenOrSmaller && (
            <>
              <PreviousButton className={cn('button-previous z-[100] transition-transform duration-500', infoModalOpen ? 'translate-x-0' : '-translate-x-full')} onClick={handleNavigatePreviousProject} />
              <NextButton className={cn('button-next z-[100] transition-transform duration-500', infoModalOpen ? 'translate-x-0' : '-translate-x-full')} onClick={handleNavigateNextProject} />
              <CloseDialogButton className='absolute top-normal right-normal z-[100]' onClick={handleCloseInfoModal} />
            </>
          )}
        </DialogPortal>
    </Dialog>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery
