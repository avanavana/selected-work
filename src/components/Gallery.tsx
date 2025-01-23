import { forwardRef, useCallback, useEffect, useLayoutEffect,useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
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

const NextButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button ref={ref} variant='galleryNavigation' className={cn('center-right rounded-l-md', className)} onClick={onClick}><ChevronRight size={48} strokeWidth={1} /></Button>
    </TooltipTrigger>
    <TooltipContent>Next project</TooltipContent>
  </Tooltip>
))

const PreviousButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button ref={ref} variant='galleryNavigation' className={cn('center-left rounded-r-md', className)} onClick={onClick}><ChevronLeft size={48} strokeWidth={1} /></Button>
    </TooltipTrigger>
    <TooltipContent>Previous project</TooltipContent>
  </Tooltip>
))

const CloseDialogButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <DialogClose asChild><Button ref={ref} className={className} onClick={onClick}><X size={24} strokeWidth={2} /></Button></DialogClose>
    </TooltipTrigger>
    <TooltipContent>Close project details</TooltipContent>
  </Tooltip>
))

const aspectRatio = extractNumber(height.xl) / extractNumber(width.xl)

const galleryOptions: EmblaOptionsType = {
  duration: 25,
  loop: true
}

interface GalleryProps {
  className?: string
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const shouldReduceMotion = useReducedMotion()
  const emblaPlugins = shouldReduceMotion ? [ Fade() ] : [ Autoplay({ delay: 5000 }) ]
  const [ emblaRef, emblaApi ] = useEmblaCarousel(galleryOptions, emblaPlugins)
  const { width: screenWidth } = useWindowSize()
  const [ isLgScreenOrSmaller, setIsLgScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.lg))
  const [ isMdScreenOrSmaller, setIsMdScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.md))
  const [ isPlaying, setIsPlaying ] = useState<boolean>(true)
  const [ infoModalOpen, setInfoModalOpen ] = useState<boolean>(false)
  const [ showMobileProjectInfo, setShowMobileProjectInfo ] = useState<boolean>(false)
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState<number>(0)
  const [ categories, setCategories ] = useState<string[]>([ 'web/interactive', 'print/illustration', '3d/environmental' ])
  const [ projects, setProjects ] = useState<string[]>(data.projects)
  const [ showAnnouncement, setShowAnnouncement ] = useState<boolean>(true)
  const [ gallerySlidesMounted, setGallerySlidesMounted ] = useState<boolean>(false)
  const [ galleryControlsMounted, setGalleryControlsMounted ] = useState<boolean>(false)
  const [ galleryControlsVisible, setGalleryControlsVisible ] = useState<boolean>(false)
  const [ selectCategoriesOpen, setSelectCategoriesOpen ] = useState<boolean>(false)
  const [ selectCategoriesInfoModalOpen, setSelectCategoriesInfoModalOpen ] = useState<boolean>(false)
  const viewProjectDetailsRef = useRef<HTMLButtonElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryDimensions = useResizeObserver<HTMLDivElement>(galleryRef)
  const calculatedHeight = galleryDimensions.width * aspectRatio
  const currentProjectDetails: Project = data.details.find(({ id }: Project) => id === projects[currentSlideIndex].substring(0, 4))!

  const handleMouseEnterGallery = () => {
    if (emblaApi && !shouldReduceMotion) emblaApi.plugins().autoplay.stop()
  }

  const handleMouseLeaveGallery = () => {
    if (emblaApi && isPlaying && !infoModalOpen && !shouldReduceMotion) emblaApi.plugins().autoplay.play()
  }

  const handleNavigateNextSlide = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const handleNavigateNextProject = () => {
    if (emblaApi) {
      const nextIndex = projects.findIndex((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i > projects.indexOf(projects[currentSlideIndex]))
      emblaApi.scrollTo(nextIndex !== -1 ? nextIndex : 0)
      if (!shouldReduceMotion) emblaApi.plugins().autoplay.stop()
    }
  }

  const handleNavigatePreviousSlide = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const handleNavigatePreviousProject = () => {
    if (emblaApi) {
      const previousIndex = projects.findIndex(id => id.substring(0, 4) === (projects.findLast((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i < currentSlideIndex) || projects.at(-1))!.substring(0, 4))
      emblaApi.scrollTo(previousIndex)
      if (!shouldReduceMotion) emblaApi.plugins().autoplay.stop()
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
    if (emblaApi && !shouldReduceMotion) emblaApi.plugins().autoplay.stop()
    const body = document.querySelector('body')
    setTimeout(() => { if (body) body.style.pointerEvents = 'unset' }, 10)
  }

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false)
    viewProjectDetailsRef.current?.blur()
    if (emblaApi && isPlaying && !shouldReduceMotion) emblaApi.plugins().autoplay.play()
  }

  const switchProject = useCallback((emblaApi: EmblaCarouselType) => {
    if (emblaApi) setCurrentSlideIndex(emblaApi.slidesInView()[0])
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', switchProject)
  }, [ emblaApi ])

  useLayoutEffect(() => {
    setIsMdScreenOrSmaller(screenWidth <= extractNumber(screens.md))
    setIsLgScreenOrSmaller(screenWidth <= extractNumber(screens.lg))
  }, [ screenWidth ])

  useEffect(() => {
    if (emblaApi) {
      setProjects(data.projects.filter((p) => categories.map((c: string) => projectCategoriesMap[c]).includes(p.substring(0, 2))))
      emblaApi.reInit()
    }
  }, [ categories, emblaApi ])

  useEffect(() => {
    const gallerySlidesTimer = setTimeout(() => {
      setGallerySlidesMounted(true)
    }, 500)

    const announcementExitTimer = setTimeout(() => {
      setShowAnnouncement(false)
      setGalleryControlsMounted(true)
    }, 7500)

    return () => {
      clearTimeout(gallerySlidesTimer)
      clearTimeout(announcementExitTimer)
    }
  }, [])

  return (
    <Dialog open={infoModalOpen} onOpenChange={setInfoModalOpen}>
      <motion.section
        ref={galleryRef}
        id='gallery'
        className={cn('relative max-w-xl w-full xl:w-xl overflow-hidden mx-auto', className)}
        initial={{ height: shouldReduceMotion || gallerySlidesMounted ? calculatedHeight : 0 }}
        animate={{ height: calculatedHeight }}
        transition={
          gallerySlidesMounted ? {
            duration: 0
          } :{
            duration: 0.5,
            ease: 'easeOut'
          }
        }
        style={{ height: calculatedHeight }}
        onMouseEnter={handleMouseEnterGallery}
        onMouseLeave={handleMouseLeaveGallery}
        onFocusCapture={(e) => {
          e.stopPropagation();
        }}
      >
        <div id='slides' className='overflow-hidden' ref={emblaRef}>
          <div className='flex touch-pan-y touch-pinch-zoom -ml-normal'>
            {projects.map((id, i) => (
              <div className='flex-full min-w-0 pl-normal [transform:translate3d(0,0,0)]' key={`image-${i.toString().padStart(2, '0')}-${id.substring(0, 4)}`}>
                <div className='flex justify-center items-center text-2xl font-bold select-none bg-transparent' style={{ height: calculatedHeight }}>
                  <img
                    className={cn('w-full', { 'cursor-pointer': isMdScreenOrSmaller })}
                    src={`/src/assets/work/image-${projects[i]}.png`}
                    alt={data.details.find((project: Project) => project.id === id.substring(0, 4))!.title}
                    {...(isMdScreenOrSmaller && { onClick: handleOpenInfoModal })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isMdScreenOrSmaller ? (
          <Button className='button-mobile-menu gallery-top-right z-[60]' onClick={infoModalOpen ? handleCloseInfoModal : handleOpenInfoModal}><Hamburger size={18} toggled={infoModalOpen} /></Button>
        ) : (
          galleryControlsMounted && (
            <motion.div
              id='gallery-controls'
              className='absolute top-0 left-0 size-full z-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: galleryControlsVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setGalleryControlsVisible(true)}
              onMouseLeave={() => {
                setGalleryControlsVisible(false)
                setSelectCategoriesOpen(false)
              }}
            >
              <div className='absolute top-0 left-0 size-full cursor-pointer' onClick={handleOpenInfoModal}></div>
              <PreviousButton className={cn('button-previous transition-[left] duration-500 ease-out', galleryControlsVisible ? 'left-0' : 'motion-safe:-left-full')} onClick={handleNavigatePreviousSlide} />
              <NextButton className={cn('button-next transition-[right] duration-500 ease-out', galleryControlsVisible ? 'right-0' : 'motion-safe:-right-full')} onClick={handleNavigateNextSlide} />
              <div className='gallery-top-right flex justify-end items-center gap-1.5'>
                <Combobox
                  value={categories}
                  onValueChange={setCategories}
                  open={selectCategoriesOpen}
                  setOpen={setSelectCategoriesOpen}
                  options={data.categories}
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className='button-info shrink-0' onClick={handleOpenInfoModal}><Icon iconNode={textSquare} size={24} strokeWidth={2} /></Button>
                  </TooltipTrigger>
                  <TooltipContent>View project details</TooltipContent>
                </Tooltip>
              </div>
              {!shouldReduceMotion && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={handlePlayPauseSlides} className='button-play-pause gallery-bottom-left'>{isPlaying ? <Pause size={24} strokeWidth={2} fill='currentColor' /> : <Play size={24} strokeWidth={2} fill='currentColor' />}</Button>
                  </TooltipTrigger>
                  <TooltipContent>{isPlaying ? 'Pause' : 'Play'}</TooltipContent>
                </Tooltip>
              )}
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
          )
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
          {!isMdScreenOrSmaller || showMobileProjectInfo ? (
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
          {!isMdScreenOrSmaller && (
            <>
              <PreviousButton className={cn('button-previous z-[100] -translate-x-full motion-reduce:translate-x-0 transition-transform duration-500 ease-out', { 'translate-x-0': infoModalOpen })} onClick={handleNavigatePreviousProject} />
              <NextButton className={cn('button-next z-[100] -translate-x-full motion-reduce:translate-x-0 transition-transform duration-500 ease-out', { 'translate-x-0': infoModalOpen })} onClick={handleNavigateNextProject} />
              <div className='absolute top-normal right-normal z-[100] flex justify-end gap-1.5'>
                <Combobox
                  value={categories}
                  onValueChange={setCategories}
                  open={selectCategoriesInfoModalOpen}
                  setOpen={setSelectCategoriesInfoModalOpen}
                  options={data.categories}
                />
                <CloseDialogButton className='shrink-0' onClick={handleCloseInfoModal} />
              </div>
            </>
          )}
        </DialogPortal>
    </Dialog>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery
