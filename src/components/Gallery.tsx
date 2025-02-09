/**
 *  TODO: Clean up and optimize this component.
 *
 *  As the most complex component in terms of UI in the project, it became somewhat spagghettified during development.
 *  Right now the priority is just to get the project live, but a full refactor that breaks this code up into more, smaller
 *  components and introduces more optimizations is first on the to-do list.
 */

import { forwardRef, MouseEventHandler, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Squash as Hamburger } from 'hamburger-react'
import { ChevronLeft, ChevronRight, CircleUserRound, Icon, Mail, Maximize, Minimize, Moon, MousePointerClick, Paperclip, Pause, Play, Sun, SunMoon, X } from 'lucide-react'
import { textSquare } from '@lucide/lab'

import { Button } from '@/components/Button'
import { Combobox, ComboboxContent } from '@/components/Combobox'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogPortal, DialogTitle } from '@/components/Dialog'
import FilterBurger from '@/components/FilterBurger'
import KeyboardCommand from '@/components/KeyboardCommand'
import Spinner from '@/components/Spinner'
import ThemeToggle from '@/components/ThemeToggle'
import { Toaster, ToasterElement } from '@/components/Toast'
import { TouchTooltip } from '@/components/TouchTooltip'
import TypedText from '@/components/TypedText'

import { useTheme } from '@/context/ThemeContext'
import { useFullScreen } from '@/hooks/useFullScreen'
import { useKeyDown } from '@/hooks/useKeyDown'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useResizeObserver } from '@/hooks/useResizeObserver'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, createFileDownload, extractNumber } from '@/lib/utils'
import { height, screens, width } from '../../tailwind.config'

import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import type { Theme } from '@/context/ThemeContext'

interface Category {
  value: string
  label: string
}

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

interface Data {
  categories: Category[]
  projects: string[]
  details: Project[]
}

interface MobileMenuOption {
  action: MouseEventHandler<HTMLAnchorElement>
  caption?: string
  icon: React.ReactNode
  text: string
}

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  forceHide?: boolean
  variant?: 'galleryNavigation' | 'galleryNavigationInfoModal'
}

interface CloseDialogButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  forceHide?: boolean
  variant?: 'infoModal'
}

const NextButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(({ className, forceHide, onClick, variant = 'galleryNavigation' }, ref) => (
  <TouchTooltip forceHide={forceHide} content={<>{variant === 'galleryNavigationInfoModal' ? 'Next project' : 'Next'}<KeyboardCommand right /></>} {...(variant === 'galleryNavigationInfoModal' && { variant: 'infoModal' })}>
    <Button ref={ref} variant={variant} aria-label={variant === 'galleryNavigationInfoModal' ? 'Next project' : 'Next'} className={cn('center-right rounded-l-md', className)} onClick={onClick}><ChevronRight size={48} strokeWidth={1} /></Button>
  </TouchTooltip>
))

const PreviousButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(({ className, forceHide, onClick, variant = 'galleryNavigation' }, ref) => (
  <TouchTooltip forceHide={forceHide} content={<>{variant === 'galleryNavigationInfoModal' ? 'Previous project' : 'Previous'}<KeyboardCommand left /></>} {...(variant === 'galleryNavigationInfoModal' && { variant: 'infoModal' })}>
    <Button ref={ref} variant={variant} aria-label={variant === 'galleryNavigationInfoModal' ? 'Previous project' : 'Previous'} className={cn('center-left rounded-r-md', className)} onClick={onClick}><ChevronLeft size={48} strokeWidth={1} /></Button>
  </TouchTooltip>
))

const CloseDialogButton = forwardRef<HTMLButtonElement, CloseDialogButtonProps>(({ className, forceHide, onClick, variant }, ref) => (
  <TouchTooltip forceHide={forceHide} content={<>Close project details<KeyboardCommand esc /></>} {...(variant && { variant })}>
    <DialogClose asChild><Button ref={ref} variant={variant} className={className} aria-label='Close project details' onClick={onClick}><X size={24} strokeWidth={2} /></Button></DialogClose>
  </TouchTooltip>
))

const aspectRatio = extractNumber(height.max) / extractNumber(width.max)

const themeOptions: Theme[] = [ 'light', 'dark', 'system']

const projectCategoriesMap: Record<string, string> = {
  'web/interactive': 'WI',
  'print/illustration': 'PI',
  '3d/environmental': '3E'
} as const

const galleryOptions: EmblaOptionsType = {
  duration: 25,
  loop: true
}

const GALLERY_OVERLAY_IDLE_TIMEOUT = 3000

interface GalleryProps {
  className?: string
  contactFormOpen: boolean
  data: Data
  handleOpenContactForm: () => void
  imageSources: string[][]
  isWebPSupported: boolean
}

const Gallery: React.FC<GalleryProps> = ({
  className,
  contactFormOpen,
  data,
  handleOpenContactForm,
  imageSources,
  isWebPSupported
}) => {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const shouldReduceMotion = usePrefersReducedMotion()
  const emblaPlugins = shouldReduceMotion ? [ Fade() ] : [ Autoplay({ delay: 5000 }) ]
  const [ emblaRef, emblaApi ] = useEmblaCarousel(galleryOptions, emblaPlugins)
  const { width: screenWidth } = useWindowSize()
  const [ isSmScreenOrSmaller, setIsSmScreenOrSmaller ] = useState<boolean>(screenWidth < extractNumber(screens.sm))
  const [ isPlaying, setIsPlaying ] = useState<boolean>(() => { const wasPlaying = localStorage.getItem('gallery-autoplay'); return !wasPlaying || wasPlaying === 'true' ? true : false })
  const [ infoModalOpen, setInfoModalOpen ] = useState<boolean>(false)
  const [ showMobileProjectInfo, setShowMobileProjectInfo ] = useState<boolean>(false)
  const [ showMobileProjectFilter, setShowMobileProjectFilter ] = useState<boolean>(false)
  const infoModalWrapperRef = useRef<HTMLDivElement>(null)
  const infoModalHeaderRef = useRef<HTMLDivElement>(null)
  const infoModalBodyRef = useRef<HTMLDivElement>(null)
  const [ gallerySlidesMounted, setGallerySlidesMounted ] = useState<boolean>(false)
  const [ galleryControlsMounted, setGalleryControlsMounted ] = useState<boolean>(false)
  const [ galleryControlsVisible, setGalleryControlsVisible ] = useState<boolean>(false)
  const [ selectCategoriesOpen, setSelectCategoriesOpen ] = useState<boolean>(false)
  const [ selectCategoriesInfoModalOpen, setSelectCategoriesInfoModalOpen ] = useState<boolean>(false)
  const [ infoModalRequiresScroll, setInfoModalRequiresScroll ] = useState<boolean>(false)
  const wasPlayingBeforeResize = useRef<boolean>(true)
  const toasterRef = useRef<ToasterElement>(null)
  const galleryIdleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const mobileProjectFilterRef = useRef<HTMLInputElement>(null)
  const viewProjectDetailsRef = useRef<HTMLButtonElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryDimensions = useResizeObserver<HTMLDivElement>(galleryRef)
  const calculatedHeight = galleryDimensions.width * aspectRatio
  const nextTheme = themeOptions[(themeOptions.indexOf(theme) + 1) % themeOptions.length]
  const { isFullScreen, toggleFullScreen } = useFullScreen(galleryRef)

  /**
   *  Note: retrieve user's selected categories, filtered projects, and last viewed project details from
   *  local storage if they exist, otherwise use the default (all) categories and project details (first project)
   */

  const [ categories, setCategories ] = useState<string[]>(() => {
    const storedCategories = localStorage.getItem('selectedCategories')
    return storedCategories ? JSON.parse(storedCategories) : data.categories.map((category) => category.value)
  })

  const [ projects, setProjects ] = useState<string[]>(() => {
    const storedProjects = localStorage.getItem('filteredProjects')
    return storedProjects ? JSON.parse(storedProjects) : data.projects
  })

  const [ filteredImageSources, setFilteredImageSources ] = useState<string[][]>(() => {
    const storedImages = localStorage.getItem('filteredImageSources')
    return storedImages ? JSON.parse(storedImages) : imageSources
  })

  const [ currentSlideIndex, setCurrentSlideIndex ] = useState<number>(() => {
    const storedIndex = localStorage.getItem('currentSlideIndex')
    const parsedIndex = storedIndex ? parseInt(storedIndex, 10) : 0
    return isNaN(parsedIndex) || parsedIndex < 0 ? 0 : parsedIndex
  })

  const [ currentProjectDetails, setCurrentProjectDetails ] = useState<Project>(() => {
    const storedProject = localStorage.getItem('currentProjectDetails')
    return storedProject ? JSON.parse(storedProject) : data.details[0]
  })

  /**
   *  Note: recalculates the height of content in the project info modal relative to the height of its container
   *  to determine if scrolling is required
   */

  const updateInfoModalDimensions = useCallback(() => {
    setTimeout(() => {
      if (!infoModalWrapperRef.current || !infoModalHeaderRef.current || !infoModalBodyRef.current) return
      const wrapperHeight = infoModalWrapperRef.current.getBoundingClientRect().height
      const headerHeight = infoModalHeaderRef.current.getBoundingClientRect().height
      const bodyHeight = infoModalBodyRef.current.getBoundingClientRect().height
      setInfoModalRequiresScroll(wrapperHeight - 76 - 76 < headerHeight + bodyHeight + 38)
    }, 10)
  }, [])

  const handleMouseEnterGallery = () => {
    if (emblaApi && !shouldReduceMotion) emblaApi.plugins().autoplay.stop()
    setGalleryControlsVisible(true)
  }

  const handleMouseLeaveGallery = () => {
    if (emblaApi && isPlaying && !infoModalOpen && !shouldReduceMotion) emblaApi.plugins().autoplay.play()
    setGalleryControlsVisible(false)
    setSelectCategoriesOpen(false)
  }

  /**
   *  Note: when in full screen mode, causes overlay controls on the gallery to fade out and autoplay
   *  to resume if the user is idle for a certain amount of time, and fade out when activity resumes
   */

  const handleOverlayIdleBehavior = () => {
    setGalleryControlsVisible(true)
    if (emblaApi && !shouldReduceMotion) emblaApi.plugins().autoplay.stop()

    if (galleryIdleTimerRef.current) {
      clearTimeout(galleryIdleTimerRef.current)
    }

    galleryIdleTimerRef.current = setTimeout(() => {
      if (isFullScreen) {
        setGalleryControlsVisible(false)
        if (emblaApi && !shouldReduceMotion && isPlaying) emblaApi.plugins().autoplay.play()
      }
    }, GALLERY_OVERLAY_IDLE_TIMEOUT)
  }

  const handleNavigateNextSlide = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const handleNavigatePreviousSlide = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  /**
   *  Note: when the project info modal is open, clicking next/previous buttons navigates to the next/previous project,
   *  not necessarily the next/previous slide, since projects may have one or two slides
   */

  const handleNavigateNextProject = () => {
    if (emblaApi) {
      const nextIndex = projects.findIndex((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i > projects.indexOf(projects[currentSlideIndex]))
      emblaApi.scrollTo(nextIndex !== -1 ? nextIndex : 0)

      if (!shouldReduceMotion) {
        setIsPlaying(false)
        emblaApi.plugins().autoplay.stop()
      }
    }
  }

  const handleNavigatePreviousProject = () => {
    if (emblaApi) {
      const previousIndex = projects.findIndex(id => id.substring(0, 4) === (projects.findLast((id, i) => id.substring(0, 4) !== projects[currentSlideIndex].substring(0, 4) && i < currentSlideIndex) || projects.at(-1))!.substring(0, 4))
      emblaApi.scrollTo(previousIndex)

      if (!shouldReduceMotion) {
        setIsPlaying(false)
        emblaApi.plugins().autoplay.stop()
      }
    }
  }

  /**
   *  Note: toggle the play/pause state of the slideshow using Embla's autoplay plugin
   *  and save the user's preference to local storage for their next visit
   */

  const togglePlayPauseSlides = () => {
    if (emblaApi) {
      if (isPlaying) {
        setIsPlaying(false)
        localStorage.setItem('gallery-autoplay', 'false')
        // @ts-ignore
        plausible('gallery-paused')
        emblaApi.plugins().autoplay.stop()
        toasterRef.current?.toast({ message: 'Slideshow paused' })
      } else {
        setIsPlaying(true)
        localStorage.setItem('gallery-autoplay', 'true')
        // @ts-ignore
        plausible('gallery-resumed')
        emblaApi.plugins().autoplay.play()
        toasterRef.current?.toast({ message: 'Slideshow resumed' })
      }
    }
  }

  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    // @ts-ignore
    plausible('resume-downloaded')
    createFileDownload('avana_vana-resume-2025-Q1.pdf')
  }

  const handlePortfolioClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    // @ts-ignore
    plausible('portfolio-downloaded')
    createFileDownload('avana_vana-selected_work-2025-Q1.pdf')
  }

  const handleToggleTheme = () => {
    setTheme(nextTheme)
    toasterRef.current?.toast({ message: `Switched to ${nextTheme} theme` })
  }

  /**
   *  Note: Radix UI's Dialog component annoyingly adds 'pointer-events: none' to the document's body when open,
   *  and this conflcits with the complex way in which the Dialog component is used in this project—namely,
   *  multiple DialogContent components are used to display different screens, each with their own close
   *  actions and keyboard shortcuts, and this was creating a situation where a user could close the dialog
   *  and 'pointer-events: none' would be left on the body element, preventing user interaction.  So we need
   *  to manually unset the property as soon as the dialog is opened.
   *
   *  We also scroll the page to the top, so that the dialog is fully visible when it opens.
   *
   *  Also, this handler uses a ref to maintain a stable reference to whether the slideshow is playing or not,
   *  in order to handle complex cases where a user takes a set of actions that manipulate the autoplay state
   *  of the slideshow.  This reference allows the app to accurately determine whether the slideshow should
   *  either resume playing or be paused when the user finally closes the dialog.
   */

  const handleOpenInfoModal = (source: 'button' | 'keyCommand' | 'mobileMenu' | 'overlay') => {
    if (emblaApi && !shouldReduceMotion) {
      if (!infoModalOpen) {
        wasPlayingBeforeResize.current = isPlaying
      }

      setIsPlaying(false)
      emblaApi.plugins().autoplay.stop()
    }

    setInfoModalOpen(true)
    // @ts-ignore
    plausible('info-modal-opened', { props: { source } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const body = document.querySelector('body')
    setTimeout(() => { if (body) body.style.pointerEvents = 'unset' }, 10)
    updateInfoModalDimensions()
  }

  const handleOpenMobileInfoModal = () => {
    setShowMobileProjectInfo(true)
    handleOpenInfoModal('overlay')
  }

  /**
   *  Note: again, we use a stable reference to accurately reconstitute the autoplay state of the slideshow
   *  when the project info modal is closed.  We also make sure to close any other nested dialog content and
   *  popovers such as the filter by category widget.
   */

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false)
    setShowMobileProjectFilter(false)
    setSelectCategoriesOpen(false)
    setSelectCategoriesInfoModalOpen(false)
    isSmScreenOrSmaller && setShowMobileProjectInfo(false)
    viewProjectDetailsRef.current?.blur()

    if (emblaApi && wasPlayingBeforeResize.current && !shouldReduceMotion) {
      setIsPlaying(true)
      emblaApi.plugins().autoplay.play()
    }
  }

  const handleOpenMobileProjectFilter = () => {
    setShowMobileProjectFilter(true)
    setTimeout(() => { mobileProjectFilterRef.current?.focus() }, 0)
  }

  const handleCloseMobileProjectFilter = () => {
    setShowMobileProjectFilter(false)
  }

  /**
   *  Note: this function dynamically sets the current slide index as the Embla carousel advances, updating the
   *  state object that stores the current project's details.  We also call updateInfoModalDimensions() so that,
   *  if open, the project info modal's content height is recalculate to determine if scrolling is required.
   */

  const switchProject = useCallback((emblaApi: EmblaCarouselType) => {
    if (emblaApi) {
      const newIndex = emblaApi.slidesInView()[0]
      setCurrentSlideIndex(newIndex)
      localStorage.setItem('currentSlideIndex', newIndex.toString())

      if ((infoModalOpen && !isSmScreenOrSmaller) || (infoModalOpen && isSmScreenOrSmaller && showMobileProjectInfo)) {
        setTimeout(() => { updateInfoModalDimensions() }, 10)
      }
    }
  }, [ emblaApi, infoModalOpen, isSmScreenOrSmaller, showMobileProjectInfo ])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', switchProject)
  }, [ emblaApi ])

  /**
   *  Note: save user's selected categories and last viewed project details to local storage on change
   */

  useEffect(() => {
    localStorage.setItem('currentSlideIndex', currentSlideIndex.toString())
  }, [ currentSlideIndex ])

  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(categories))
    // @ts-ignore
    plausible('projects-filtered', { props: { 'web': categories.includes('web/interactive'), '3d': categories.includes('3d/environmental'), 'print': categories.includes('print/illustration') }})
  }, [ categories ])

  useEffect(() => {
    localStorage.setItem('currentProjectDetails', JSON.stringify(currentProjectDetails))
  }, [ currentProjectDetails ])

  /**
   *  Note: calculate the viewport width and determine which versions of the project info modal should be rendered
   */

  useLayoutEffect(() => {
    setIsSmScreenOrSmaller(screenWidth < extractNumber(screens.sm))
    if (screenWidth < extractNumber(screens.sm) && !infoModalOpen) setShowMobileProjectInfo(false)

    if (screenWidth >= extractNumber(screens.sm) && contactFormOpen) {
      setShowMobileProjectInfo(false)
      setInfoModalOpen(false)
    }
  }, [ screenWidth ])

  /**
   *  Note: dynamically filter gallery image sources and project data based on the user's selected categories.
   *  Since this requires re-initialization of the Embla carousel, we need to make sure to manually stop autoplay
   *  after re-initialization, otherwise the re-init will cause the Embla carousel to play automatically when the
   *  project info modal is open—something which should never happen.
   */

  useEffect(() => {
    if (emblaApi) {
      const updatedProjects = data.projects.filter((p) =>
        categories.map((c: string) => projectCategoriesMap[c]).includes(p.substring(0, 2))
      )

      const updatedImageSources = imageSources.filter((sources) =>
        categories
          .map((c: string) => projectCategoriesMap[c])
          .some((c: string) => sources.some((src) => new RegExp(`image-${c}\\d{2}`).test(src)))
      )

      setProjects(updatedProjects)
      setFilteredImageSources(updatedImageSources)

      localStorage.setItem('filteredProjects', JSON.stringify(updatedProjects))
      localStorage.setItem('filteredImageSources', JSON.stringify(updatedImageSources))

      emblaApi.reInit()

      if (infoModalOpen && !shouldReduceMotion) {
        const timer = setTimeout(() => {
          emblaApi.plugins().autoplay.stop()
          setIsPlaying(false)
        }, 0)

        return () => clearTimeout(timer)
      }
    }
  }, [ categories, emblaApi ])

  /**
   *  Note: again, Radix UI's Dialog component sets 'pointer-events: none' on the body, and to avoid
   *  issues we remove it when the contact form is closed.
   */

  useEffect(() => {
    if (!contactFormOpen) {
      const body = document.querySelector('body')

      const timer = setTimeout(() => {
        if (body?.style.pointerEvents === 'none') {
          body.style.pointerEvents = ''
        }
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [ contactFormOpen ])

  /**
   *  Note: if the user changes their 'prefers-reduced-motion' setting, we need to re-initialize the Embla carousel
   *  with the appropriate plugin (fade for reduced motion, autoplay/slide by default).  We also need to make sure
   *  autoplay is stopped after re-initialization when the project info modal or contact form is open.
   */

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(galleryOptions, shouldReduceMotion ? [ Fade() ] : [ Autoplay({ delay: 5000 }) ])

      if (!shouldReduceMotion) {
        if (infoModalOpen || contactFormOpen) {
          const timer = setTimeout(() => {
            emblaApi.plugins().autoplay.stop()
            setIsPlaying(false)
          }, 0)

          return () => clearTimeout(timer)
        } else {
          const timer = setTimeout(() => {
            emblaApi.plugins().autoplay.play()
            const wasPlaying = localStorage.getItem('gallery-autoplay')
            setIsPlaying(!wasPlaying || wasPlaying === 'true' ? true : false)
          }, 0)

          return () => clearTimeout(timer)
        }
      }
    }
  }, [ emblaApi, contactFormOpen, infoModalOpen, screenWidth, shouldReduceMotion ])

  /**
   *  Note: dynamically determine the current project's details data based on both a changing
   *  current slide index and changing user-selected categories.
   */

  useEffect(() => {
    if (projects.length === 0) return

    if (!projects[currentSlideIndex]) {
      setCurrentSlideIndex(0)
      return
    }

    const currentProjectId = projects[currentSlideIndex]?.substring(0, 4)
    const details = data.details.find(({ id }: Project) => id === currentProjectId)

    if (details) setCurrentProjectDetails(details)
  }, [ categories, currentSlideIndex, projects ])

  /**
   *  Note: recaculate the project info modal's content height vs. its container height when the
   *  viewport is resized, when new modal content is rendered, or when the next slide changes, to
   *  determine if scrolling is required.
   */

  useEffect(() => {
    updateInfoModalDimensions()
    window.addEventListener('resize', updateInfoModalDimensions)
    return () => window.removeEventListener('resize', updateInfoModalDimensions)
  }, [ currentSlideIndex, updateInfoModalDimensions, showMobileProjectInfo, showMobileProjectFilter ])

  /**
   *  Note: displays a helpful toast message when the gallery initially loads after the intro animation
   */

  useEffect(() => {
    const gallerySlidesTimer = setTimeout(() => {
      setGallerySlidesMounted(true)
      setGalleryControlsMounted(true)
    }, 500)

    toasterRef.current?.toast({ message: (<><MousePointerClick size={24} strokeWidth={2} />Tap or click anywhere on the image to view project details</>) })

    return () => {
      clearTimeout(gallerySlidesTimer)
    }
  }, [])

  /**
   *  Note: observe whether the user's full screen settings change, and handle idle behavior on user
   *  mouse and touch interactions to hide the gallery controls in full screen mode.
   */

  useEffect(() => {
    if (!isFullScreen) return

    document.addEventListener('mousemove', handleOverlayIdleBehavior)
    document.addEventListener('touchstart', handleOverlayIdleBehavior)

    galleryIdleTimerRef.current = setTimeout(() => {
      setGalleryControlsVisible(false)
      if (emblaApi && !shouldReduceMotion && isPlaying) emblaApi.plugins().autoplay.play()
    }, GALLERY_OVERLAY_IDLE_TIMEOUT)

    return () => {
      document.removeEventListener('mousemove', handleOverlayIdleBehavior)
      document.removeEventListener('touchstart', handleOverlayIdleBehavior)

      if (galleryIdleTimerRef.current) {
        clearTimeout(galleryIdleTimerRef.current)
      }
    }
  }, [ isFullScreen, isPlaying, shouldReduceMotion ])

  /**
   *  Note dynamically generates mobile menu options
   */

  const mobileMenuOptions: MobileMenuOption[] = [
    {
      text: 'View project details',
      action: () => setShowMobileProjectInfo(true),
      icon: <Icon iconNode={textSquare} size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
    },
    {
      text: 'Download résumé',
      caption: '61 kB PDF',
      action: handleResumeClick,
      icon: <CircleUserRound size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
    },
    {
      text: 'Download selected work',
      caption: '16 MB PDF',
      action: handlePortfolioClick,
      icon: <Paperclip size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
    },
    {
      text: `Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`,
      action: handleToggleTheme,
      icon: theme === 'light'
        ? <Moon size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
        : theme === 'dark'
          ? <SunMoon size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
          : <Sun size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
    },
    {
      text: 'Get in touch',
      action: handleOpenContactForm,
      icon: <Mail size={24} strokeWidth={2} className='transition-all group-hover:stroke-gray-800 dark:group-hover:stroke-white' stroke='currentColor' />
    }
  ]

  /**
   *  Note: use custom hooks to handle various keyboard shortcuts.  The useKeyDown() hook accepts a key code identifier,
   *  a callback function, and then an optional options object that allows one to specify the conditions under which the
   *  callback function should be invoked, as well as any modifiers that should be active when invoking the callback.
   *  This allows us to cleanly handle all keyboard shortcuts under precise conditions and to avoid conflicts between them.
   */

  useKeyDown('KeyK', () => setSelectCategoriesInfoModalOpen((state) => !state), { condition: galleryControlsMounted && infoModalOpen, modifiers: [ 'Command' ] })
  useKeyDown('ArrowLeft', handleNavigatePreviousProject, { condition: galleryControlsMounted && infoModalOpen && !contactFormOpen })
  useKeyDown('ArrowRight', handleNavigateNextProject, { condition: galleryControlsMounted && infoModalOpen && !contactFormOpen })
  useKeyDown('KeyK', () => setSelectCategoriesOpen((state) => !state), { condition: galleryControlsMounted && galleryControlsVisible && !infoModalOpen, modifiers: [ 'Command' ] })
  useKeyDown('KeyK', () => setShowMobileProjectFilter(true), { condition: galleryControlsMounted && infoModalOpen && showMobileProjectInfo, modifiers: [ 'Command' ] })
  useKeyDown('KeyK', () => setShowMobileProjectFilter(false), { condition: galleryControlsMounted && infoModalOpen && showMobileProjectFilter, modifiers: [ 'Command' ] })
  useKeyDown('KeyL', handleToggleTheme, { condition: galleryControlsMounted, modifiers: [ 'Command' ] })
  useKeyDown('Enter', () => { handleOpenInfoModal('keyCommand'); setShowMobileProjectInfo(true) }, { condition: galleryControlsMounted && isSmScreenOrSmaller && !(infoModalOpen || contactFormOpen), modifiers: [ 'Command' ] })
  useKeyDown('Enter', () => handleOpenInfoModal('keyCommand'), { condition: galleryControlsMounted && !(infoModalOpen || contactFormOpen || selectCategoriesOpen), excludeModifiers: [ 'Alt', 'Command' ] })
  useKeyDown('Space', togglePlayPauseSlides, { condition: galleryControlsMounted && !(infoModalOpen || contactFormOpen) })
  useKeyDown('ArrowLeft', handleNavigatePreviousSlide, { condition: galleryControlsMounted && !(infoModalOpen || contactFormOpen) })
  useKeyDown('ArrowRight', handleNavigateNextSlide, { condition: galleryControlsMounted && !(infoModalOpen || contactFormOpen) })

  return (
    <Dialog open={infoModalOpen} onOpenChange={setInfoModalOpen}>
      <motion.section
        ref={galleryRef}
        id='gallery'
        className={cn('relative max-w-max min-w-80 w-full max:w-max overflow-hidden mx-auto', { 'flex items-center': isFullScreen }, className)}
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
          e.stopPropagation()
        }}
      >
        <Suspense fallback={<Spinner />}>
          <div id='slides' ref={emblaRef} className='overflow-hidden'>
            <div className='flex touch-pan-y touch-pinch-zoom -ml-normal cursor-pointer' onClick={isSmScreenOrSmaller ? handleOpenMobileInfoModal : () => handleOpenInfoModal('overlay')}>
              {filteredImageSources.map((sources, i) => {
                /**
                 *  Note: generate source sets for each project's images after preloading them (in App.tsx)
                 *  We use a custom useWebPSupported() hook to determine whether the user's device supports WebP
                 *  images, and prefer those sources to PNG (due to lower file size and better compression).
                 *  We also generate different sets of sources for different screen sizes, to deliver the most
                 *  optimal image quality for each visitor's device.
                 *
                 *  Images are stored on AWS S3 and cached and served via AWS' CloudFront CDN for optimal performance.
                 *  Each image format and size variation is dynamically generated when the original image is uploaded
                 *  to S3 using a python script (see the 'scripts' folder in the project root) running as an AWS Lambda
                 *  function, triggered by S3 PUT events.
                 */

                const webpOriginal = sources.find((src) => src.includes('/work/image-'))
                const webpSmall = sources.find((src) => src.includes('/work/sm/image-'))
                const webpMedium = sources.find((src) => src.includes('/work/md/image-'))
                const webpLarge = sources.find((src) => src.includes('/work/lg/image-'))

                const pngOriginal = sources.find((src) => src.includes('/work/png/image-'))
                const pngSmall = sources.find((src) => src.includes('/work/sm/png/image-'))
                const pngMedium = sources.find((src) => src.includes('/work/md/png/image-'))
                const pngLarge = sources.find((src) => src.includes('/work/lg/png/'))

                const fallback = webpOriginal || pngOriginal || sources[0]

                const imageProjectId = webpOriginal?.match(/image-((?:WI|PI|3E)[0-9]{2})/)![1]

                return (
                  <div className='flex-full min-w-0 pl-normal [transform:translate3d(0,0,0)]' key={`image-${i.toString().padStart(2, '0')}-${imageProjectId}`}>
                    <div className='flex justify-center items-center text-2xl font-bold select-none bg-transparent' style={{ height: calculatedHeight }}>
                      <picture>
                        {isWebPSupported && webpOriginal && webpSmall && webpMedium && webpLarge && (
                          <source
                            type='image/webp'
                            srcSet={`${webpSmall} 640w, ${webpMedium} 896w, ${webpLarge} 1024w, ${webpOriginal} 1280w`}
                            sizes='(max-width: 640px) 640px, (max-width: 896px) 896px, (max-width: 1024px) 1024px, 1280px'
                          />
                        )}
                        {pngOriginal && pngSmall && pngMedium && pngLarge && (
                          <source
                            type='image/png'
                            srcSet={`${pngSmall} 640w, ${pngMedium} 896w, ${pngLarge} 1024w, ${pngOriginal} 1280w`}
                            sizes='(max-width: 640px) 640px, (max-width: 896px) 896px, (max-width: 1024px) 1024px, 1280px'
                          />
                        )}
                        <img
                          className='w-full'
                          src={fallback}
                          alt={data.details.find((project: Project) => project.id === imageProjectId)!.title}
                        />
                      </picture>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Suspense>

        {
          /**
           *  Note: conditionally buttons on smaller screens, depending on function
           */
        }

        {isSmScreenOrSmaller ? (
          <>
            {showMobileProjectInfo && (
              <TouchTooltip forceHide={!galleryControlsVisible} variant='infoModal' content={<>Previous project <KeyboardCommand left /></>}>
                <Button
                  aria-label='Previous project'
                  aria-live='off'
                  className={cn('button-mobile-menu gallery-top-left z-[60] rounded-r-none', showMobileProjectFilter ? 'opacity-0' : 'opacity-100')}
                  onClick={handleNavigatePreviousProject}
                  variant='infoModal'
                >
                  <ChevronLeft size={24} strokeWidth={2} />
                </Button>
              </TouchTooltip>
            )}
            {showMobileProjectInfo && (
              <TouchTooltip forceHide={!galleryControlsVisible} variant='infoModal' content={<>Next project <KeyboardCommand right /></>}>
                <Button
                  aria-label='Next project'
                  aria-live='off'
                  className={cn('button-mobile-menu absolute top-normal left-[86px] z-[60] rounded-l-none before:content-[""] before:block before:w-[1px] before:h-full before:bg-gray-500 dark:before:bg-gray-600 before:absolute before:left-0', showMobileProjectFilter ? 'opacity-0' : 'opacity-100')}
                  onClick={handleNavigateNextProject}
                  variant='infoModal'
                >
                  <ChevronRight size={24} strokeWidth={2} />
                </Button>
              </TouchTooltip>
            )}
            {!contactFormOpen && (
              <TouchTooltip forceHide={!galleryControlsVisible} content={infoModalOpen ? <>Close menu <KeyboardCommand esc /></> : <>Open menu <KeyboardCommand enter /></>} {...(infoModalOpen && { variant: 'infoModal' })}>
                <Button
                  aria-label={infoModalOpen ? 'Close menu' : 'Open menu'}
                  aria-live='off'
                  className={cn('button-mobile-menu gallery-top-right z-[60] transition-opacity', showMobileProjectFilter ? 'opacity-0' : 'opacity-100')}
                  onClick={infoModalOpen ? handleCloseInfoModal : () => handleOpenInfoModal('button')}
                  {...(infoModalOpen && { variant: 'infoModal' })}
                >
                  <Hamburger size={18} toggled={infoModalOpen} />
                </Button>
              </TouchTooltip>
            )}
            {
              /**
               *  Note: remove "View project info" button from small screen gallery overlay.
               *  This minizes the number of buttons obscuring the gallery images on smaller screens,
               *  since on smaller screens the buttons/overlay does not auto-hide, and because the
               *  functionality for this button is available as the first option in the mobile menu
               *  and by tapping the gallery images at any time (as the gallery mount announcement/toast says).
               */
            }
            {/* {!contactFormOpen && (
              <TouchTooltip forceHide={!galleryControlsVisible} content={<>View project info <KeyboardCommand command enter /></>}>
                <Button
                  aria-label='View project info'
                  aria-live='off'
                  className='button-mobile-menu absolute top-normal right-[92px] z-40'
                  onClick={showMobileProjectInfo ? handleCloseMobileInfoModal : handleOpenMobileInfoModal}
                >
                  <Icon iconNode={textSquare} size={24} strokeWidth={2} />
                </Button>
              </TouchTooltip>
            )} */}
            {!contactFormOpen && (
              <TouchTooltip forceHide={!galleryControlsVisible} content={<>{isFullScreen ? 'Exit full screen' : 'Full screen'}<KeyboardCommand option enter /></>}>
                <Button aria-label={isFullScreen ? 'Exit full screen' : 'Full screen'} onClick={toggleFullScreen} className={cn('button-fullscreen gallery-bottom-right transition-opacity duration-500 z-40', galleryControlsVisible ? 'opacity-100' : 'opacity-0')}>{isFullScreen ? <Minimize size={24} strokeWidth={2} fill='currentColor' /> : <Maximize size={24} strokeWidth={2} fill='currentColor' />}</Button>
              </TouchTooltip>
            )}
            {
              /*
               *  Note: on smaller screens, render a special trigger button for the filter by category function, which
               *  opens as separate dialog content instead of as part of a self-contained combobox component with integral
               *  trigger button and dropdown popover.  The icon here is a custom animated icon based on the 'hamburger-react'
               *  library, which transforms the filter icon from lucide-react into a close button on click, and vice-versa.
               */
            }
            {showMobileProjectInfo && (
              <TouchTooltip forceHide={!galleryControlsVisible} variant='infoModal' content={<>{showMobileProjectFilter ? 'Close' : 'Filter by category'}<KeyboardCommand command keys={[ 'K' ]} /></>}>
                <Button
                  aria-label={showMobileProjectFilter ? 'Close' : 'Filter by category'}
                  aria-live='off'
                  className={cn('info-modal-filter-container absolute top-normal z-[60] transition-[left]', showMobileProjectFilter ? 'left-normal' : 'left-[140px]')}
                  onClick={showMobileProjectFilter ? handleCloseMobileProjectFilter : handleOpenMobileProjectFilter}
                  variant='infoModal'
                >
                  <FilterBurger
                    size={20}
                    toggled={showMobileProjectFilter}
                    value={categories}
                    options={data.categories.map((category) => category.value)}
                    showCount={!showMobileProjectFilter}
                  />
                </Button>
              </TouchTooltip>
            )}
          </>
        ) : (
          /**
           *  Note: conditionally render gallery overlay buttons on larger screens, depending on function
           */

          galleryControlsMounted && (
            <>
              <PreviousButton forceHide={!galleryControlsVisible} className={cn('button-previous transition-[left,opacity] duration-500 ease-out', galleryControlsVisible ? 'opacity-100 left-0' : 'opacity-0 motion-safe:-left-full')} onClick={handleNavigatePreviousSlide} />
              <NextButton forceHide={!galleryControlsVisible} className={cn('button-next transition-[right,opacity] duration-500 ease-out', galleryControlsVisible ? 'opacity-100 right-0' : 'opacity-0 motion-safe:-right-full')} onClick={handleNavigateNextSlide} />
              {!isFullScreen && (
                <div className={cn('gallery-top-right flex justify-end items-center gap-1.5 transition-opacity duration-500 ease-out', galleryControlsVisible ? 'opacity-100' : 'opacity-0')}>
                  <ThemeToggle onClick={handleToggleTheme} />
                  <Combobox
                    value={categories}
                    onValueChange={setCategories}
                    open={selectCategoriesOpen}
                    setOpen={setSelectCategoriesOpen}
                    options={data.categories}
                    forceHideTooltip={!galleryControlsVisible}
                  />
                  <TouchTooltip forceHide={!galleryControlsVisible} content={<>View project details<KeyboardCommand enter /></>}>
                    <Button aria-label='View project details' className='button-info shrink-0' onClick={() => handleOpenInfoModal('button')}><Icon iconNode={textSquare} size={24} strokeWidth={2} /></Button>
                  </TouchTooltip>
                </div>
              )}
              <div className='gallery-bottom-left flex items-center gap-1.5'>
                {/* Note: Autoplay is disabled in reduced motion mode, so we don't need to show a play/pause button */}
                {!shouldReduceMotion && (
                  <TouchTooltip forceHide={!galleryControlsVisible} content={<>{isPlaying ? 'Pause' : 'Play'}<KeyboardCommand space /></>}>
                    <Button aria-label={isPlaying ? 'Pause' : 'Play'} onClick={togglePlayPauseSlides} className={cn('button-play-pause transition-opacity duration-500', galleryControlsVisible ? 'opacity-100' : 'opacity-0')}>{isPlaying ? <Pause size={24} strokeWidth={2} fill='currentColor' /> : <Play size={24} strokeWidth={2} fill='currentColor' />}</Button>
                  </TouchTooltip>
                )}
                <TouchTooltip forceHide={!galleryControlsVisible} content={<>{isFullScreen ? 'Exit full screen' : 'Full screen'}<KeyboardCommand option enter /></>}>
                  <Button aria-label={isFullScreen ? 'Exit full screen' : 'Full screen'} onClick={toggleFullScreen} className={cn('button-fullscreen transition-opacity duration-500', galleryControlsVisible ? 'opacity-100' : 'opacity-0')}>{isFullScreen ? <Minimize size={24} strokeWidth={2} fill='currentColor' /> : <Maximize size={24} strokeWidth={2} fill='currentColor' />}</Button>
                </TouchTooltip>
              </div>
              {/* Note: No need to show resume/portfolio download buttons in full screen mode */}
              {!isFullScreen && (
                <div className={cn('gallery-bottom-right flex items-center gap-1.5 transition-opacity duration-500', galleryControlsVisible ? 'opacity-100' : 'opacity-0')}>
                  <TouchTooltip forceHide={!galleryControlsVisible} content={<>Download résumé <span className='font-normal text-gray-300'>(61 kB PDF)</span></>}>
                    <Button aria-label='Download résumé' className='button-resume' onClick={handleResumeClick}><CircleUserRound size={24} strokeWidth={2} /></Button>
                  </TouchTooltip>
                  <TouchTooltip forceHide={!galleryControlsVisible} content={<>Download selected work <span className='font-normal text-gray-300'>(16 MB PDF)</span></>}>
                    <Button aria-label='Download selected work' className='button-portfolio' onClick={handlePortfolioClick}><Paperclip size={24} strokeWidth={2} /></Button>
                  </TouchTooltip>
                </div>
              )}
            </>
          )
        )}
        <Toaster ref={toasterRef} />
      </motion.section>

      {
        /**
         *  Note: render dialog content: project info, mobile menu
         */
      }

      <DialogPortal>
        {/**
          *  Note: render project info dialog content if viewport is larger than the small screen size no matter what
          *  or if the viewport is the small screensize, but the user has chosen 'view project info' from the mobile menu
          */
        }
        {(!isSmScreenOrSmaller || showMobileProjectInfo) ? (
          <DialogContent
            type='projectDetails'
            onEscapeKeyDown={(e) => {
              e.preventDefault()
              e.stopPropagation()

              if (showMobileProjectFilter) {
                handleCloseMobileProjectFilter()
              } else {
                handleCloseInfoModal()
              }
            }}
            onPointerDownOutside={(e) => e.preventDefault()}
            requiresScroll={infoModalRequiresScroll}
          >
            {
              /**
               *  Note: on small screen size, we render just the filter by category combobox content as content in a dialog
               *  instead of rendering the entire combobox component with its trigger button and dropdown popover.
               */
            }
            {showMobileProjectFilter && isSmScreenOrSmaller ? (
              <div ref={infoModalWrapperRef} className={cn('info-modal-wrapper h-full flex flex-col justify-center gap-normal overflow-y-scroll overflow-x-hidden px-normal sm:px-info-modal-fluid md:px-info-modal-max', { 'pb-double !justify-start requires-scroll': infoModalRequiresScroll })} >
                <DialogHeader ref={infoModalHeaderRef} className='sr-only'><DialogTitle>Menu</DialogTitle></DialogHeader>
                <DialogDescription className='sr-only' isDarkMode={resolvedTheme === 'dark'}>Filter selected work by category.</DialogDescription>
                <div ref={infoModalBodyRef} className='info-modal-body'>
                  <ComboboxContent
                    ref={mobileProjectFilterRef}
                    value={categories}
                    onValueChange={setCategories}
                    options={data.categories}
                    forceHideTooltip={!galleryControlsVisible}
                  />
                </div>
              </div>
            ) : (
              /**
               *  Note: render project info dialog content itself
              */

              <div ref={infoModalWrapperRef} className={cn('info-modal-wrapper h-full flex flex-col justify-center gap-normal overflow-y-scroll overflow-x-hidden px-normal sm:px-info-modal-fluid md:px-info-modal-max', { 'pb-double !justify-start requires-scroll': infoModalRequiresScroll })} >
                <DialogHeader ref={infoModalHeaderRef} key={`${currentProjectDetails.id}-header`} className='info-modal-header flex-col md:flex-row motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter'>
                  <DialogTitle
                    className='relative md:after:content-[""] md:after:w-0.5 md:after:h-6 after:block md:after:bg-gray-200 dark:md:after:bg-gray-600 md:after:top-1 md:after:-right-[18px] md:after:absolute md:after:rotate-[28deg]'
                  >
                    {currentProjectDetails.title}
                  </DialogTitle>
                  <span className='info-modal-project-title relative top-[3px] flex flex-col text-xs whitespace-nowrap leading-3'>
                    <span className='info-modal-project-type uppercase tracking-[2px]'>{currentProjectDetails.type}</span>
                    <span className='info-modal-project-date'>{currentProjectDetails.date}</span>
                  </span>
                </DialogHeader>
                <div ref={infoModalBodyRef} className='info-modal-body flex flex-col gap-normal'>
                  <div className='info-modal-metadata flex flex-col md:flex-row gap-normal'>
                    <div key={`${currentProjectDetails.id}-client`} className='info-modal-project-client w-[240px] motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-100'>
                      <h3>{currentProjectDetails.fullTime ? 'With' : 'For'}</h3>
                      <DialogDescription isDarkMode={resolvedTheme === 'dark'}>{currentProjectDetails.client}</DialogDescription>
                    </div>
                    <div key={`${currentProjectDetails.id}-skills`} className='info-modal-project-skills motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-200'>
                      <h3>Skills</h3>
                      <p>{currentProjectDetails.skills}</p>
                    </div>
                  </div>
                  <div
                    key={`${currentProjectDetails.id}-desc`}
                    className={cn(
                      'info-modal-project-desc [&_p]:mb-6 [&_p:last-child]:mb-0',
                      currentProjectDetails.desc.length > 1000
                        ? 'lg:columns-2 lg:gap-normal motion-safe:opacity-100 motion-safe:translate-y-0 motion-safe:animate-none motion-safe:delay-0 motion-safe:[&_p]:opacity-0 motion-safe:[&_p]:translate-y-3 motion-safe:[&_p]:animate-slide-enter motion-safe:[&_p:nth-child(1)]:delay-300 motion-safe:[&_p:nth-child(2)]:delay-400 motion-safe:[&_p:nth-child(3)]:delay-500 motion-safe:[&_p:nth-child(4)]:delay-600 motion-safe:[&_p:nth-child(5)]:delay-700 motion-safe:[&_p:nth-child(6)]:delay-800 motion-safe:[&_p:nth-child(7)]:delay-900 motion-safe:[&_p:nth-child(8)]:delay-1000 lg:[&_p]:!animate-none lg:[&_p]:!delay-0 motion-safe:lg:[&_p]:opacity-100 motion-safe:lg:[&_p]:translate-y-0 motion-safe:lg:opacity-0 motion-safe:lg:translate-y-3 motion-safe:lg:animate-slide-enter motion-safe:lg:delay-300 motion-safe:lg:[&_p:nth-child(1)]:delay-400 motion-safe:lg:[&_p:nth-child(2)]:delay-500 motion-safe:lg:[&_p:nth-child(3)]:delay-600 motion-safe:lg:[&_p:nth-child(4)]:delay-700 motion-safe:lg:[&_p:nth-child(5)]:delay-800 motion-safe:lg:[&_p:nth-child(6)]:delay-900 motion-safe:lg:[&_p:nth-child(7)]:delay-1000 motion-safe:lg:[&_p:nth-child(8)]:delay-1100'
                        : 'motion-safe:opacity-100 motion-safe:[&_p]:opacity-0 motion-safe:[&_p]:translate-y-3 motion-safe:[&_p]:animate-slide-enter motion-safe:[&_p:nth-child(1)]:delay-300 motion-safe:[&_p:nth-child(2)]:delay-400 motion-safe:[&_p:nth-child(3)]:delay-500 motion-safe:[&_p:nth-child(4)]:delay-600 motion-safe:[&_p:nth-child(5)]:delay-700 motion-safe:[&_p:nth-child(6)]:delay-800 motion-safe:[&_p:nth-child(7)]:delay-900 motion-safe:[&_p:nth-child(8)]:delay-1000'
                    )}
                    dangerouslySetInnerHTML={{ __html: currentProjectDetails.desc }}
                  >
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        ) : (
          /**
           *  Note: render mobile menu on small screen sizes
           */

          <DialogContent
            type='projectDetails'
            className='px-normal justify-stretch'
            onEscapeKeyDown={handleCloseInfoModal}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <DialogHeader className='sr-only'><DialogTitle>Menu</DialogTitle></DialogHeader>
            <DialogDescription className='sr-only'>Choose a menu option from the list below.</DialogDescription>
            <ul className='self-center flex flex-col gap-normal w-full [&_a]:text-mobile-menu [&_a]:transition-colors [&_a:hover]:text-gray-800 dark:[&_a:hover]:text-white'>
              {
                /**
                 *  Note: dynamically generate mobile menu options with animated icons and typewriter effect for text
                 */
              }
              {mobileMenuOptions.map(({action, caption, icon, text }, i) => {
                const mobileMenuItemTextDelay = i * 0.25
                const mobileMenuItemTextDuration = text.length * 0.075
                const mobileMenuItemDividerDelay = (i + 1) * 0.25

                return (
                  <li key={`mobile-menu-option-${i}`} className='relative pb-normal'>
                    <a href='#' onClick={action} className='block group text-gray-600 dark:text-gray-300 [&_svg]:text-gray-300 dark:[&_svg]:text-gray-600 transition-colors hover:text-gray-800 dark:hover:text-white'>
                      {shouldReduceMotion ? (
                        <span className='flex items-center gap-2'>{icon}{text}{caption && <span className='font-normal whitespace-nowrap text-gray-300 dark:text-gray-600'>({caption})</span>}</span>
                      ) : (
                        <span className='relative flex items-center gap-2'>
                          <motion.span
                            className='motion-safe:group-hover:animate-contact-item-hover stroke-current group-hover:stroke-gray-800 dark:group-hover:stroke-white'
                            initial={{ opacity: 0, scale: 0.01 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: mobileMenuItemTextDelay,
                              duration: 0.3,
                              type: 'spring',
                              stiffness: 500,
                              damping: 20
                            }}
                          >
                            {icon}
                          </motion.span>
                          <TypedText delay={mobileMenuItemTextDelay}>{text}</TypedText>
                          {caption && <TypedText delay={mobileMenuItemTextDelay + mobileMenuItemTextDuration} className='font-normal whitespace-nowrap text-gray-300 dark:text-gray-600'>({caption})</TypedText>}
                        </span>
                      )}
                    </a>
                    {i < mobileMenuOptions.length - 1 && (
                      <motion.div
                        className='absolute left-0 bottom-0 h-0.5 bg-border'
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{
                          delay: mobileMenuItemDividerDelay,
                          duration: 0.5,
                          ease: 'easeInOut'
                        }}
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </DialogContent>
        )}
        {
          /**
           *  Note: on larger screens, render remaining gallery overlay buttons within project info modal
           */
        }
        {!isSmScreenOrSmaller && (
          <>
            <PreviousButton forceHide={!galleryControlsVisible} variant='galleryNavigationInfoModal' className={cn('button-previous z-[100] -translate-x-full motion-reduce:translate-x-0 transition-transform duration-500 ease-out', { 'translate-x-0': infoModalOpen })} onClick={handleNavigatePreviousProject} />
            <NextButton forceHide={!galleryControlsVisible} variant='galleryNavigationInfoModal' className={cn('button-next z-[100] -translate-x-full motion-reduce:translate-x-0 transition-transform duration-500 ease-out', { 'translate-x-0': infoModalOpen })} onClick={handleNavigateNextProject} />
            <div
              aria-live='off'
              className='info-modal-filter-container absolute top-normal right-normal z-[100] flex justify-end gap-1.5'
            >
              <Combobox
                variant='infoModal'
                value={categories}
                onValueChange={setCategories}
                open={selectCategoriesInfoModalOpen}
                setOpen={setSelectCategoriesInfoModalOpen}
                options={data.categories}
                forceHideTooltip={!galleryControlsVisible}
              />
              <CloseDialogButton forceHide={!galleryControlsVisible} aria-label='Close' variant='infoModal' className='shrink-0' onClick={handleCloseInfoModal} />
            </div>
          </>
        )}
      </DialogPortal>
    </Dialog>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery
