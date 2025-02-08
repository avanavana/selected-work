import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { resolvedTheme } = useTheme()

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn('grid place-items-center', resolvedTheme === 'dark' ? 'bg-gray-800/85' : 'bg-white/85', 'fixed inset-0 z-50 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className)}
      {...props}
    />
  )
})

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
  & { requiresScroll?: boolean, type?: 'default' | 'projectDetails' | 'contact' }
>(({ className, children, requiresScroll = false, type = 'default', ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          type === 'default' ? 'max-w-lg gap-4 border bg-background p-6 shadow-lg' : 'relative h-full max-w-xl outline-none py-[var(--spacing-y-info-modal)] overflow-hidden',
          { 'info-modal': type === 'projectDetails' },
          { 'contact-modal': type === 'contact' },
          'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
          'z-50 grid w-full duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] motion-reduce:data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] motion-reduce:data-[state=open]:slide-in-from-top-[50%]',
          { 'requires-scroll': requiresScroll },
          className
        )}
        {...props}
        onFocusCapture={((e) => { e.stopPropagation() })}
      >
        {children}
        {type === 'default' && (
          <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex gap-2 md:gap-normal',
      className
    )}
    {...props}
  />
))

DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)

DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-3xl leading-none break-all xs:break-normal',
      className
    )}
    {...props}
  />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {
  isDarkMode?: boolean
}

const DialogDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, isDarkMode,...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(isDarkMode ? 'text-gray-300' :'text-gray-600', className)}
    {...props}
  />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
