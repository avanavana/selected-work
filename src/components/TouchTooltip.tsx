import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip'

import { useDetectTouchscreen } from '@/hooks/useDetectTouchscreen'

const TouchTooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isTouchscreen = useDetectTouchscreen()
  return isTouchscreen ? <>{children}</> : <TooltipProvider>{children}</TooltipProvider>
}

interface TouchTooltipProps extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  children: React.ReactNode
  content: React.ReactNode
  forceHide?: boolean
  variant?: 'infoModal'
}

const TouchTooltip: React.FC<TouchTooltipProps> = ({ children, content, forceHide, variant, ...props }) => {
  const isTouchscreen = useDetectTouchscreen()

  return isTouchscreen ? (
    <>{children}</>
  ) : (
    <Tooltip {...(forceHide && { open: false })} {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent {...(variant && { variant })}>{content}</TooltipContent>
    </Tooltip>
  )
}

TouchTooltip.displayName = 'TouchTooltip'

export {
  TouchTooltipProvider,
  TouchTooltip
}
