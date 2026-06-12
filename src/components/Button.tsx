import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'button flex items-center justify-center whitespace-nowrap bg-gray-800/50 text-lg font-bold text-gray-300 backdrop-blur-sm transition-all hover:bg-gray-800/85 hover:text-white focus-visible:outline-none active:bg-gray-800/85 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'size-12 rounded-full motion-safe:hover:scale-105',
        infoModal: 'size-12 rounded-full motion-safe:hover:scale-105 dark:bg-gray-600/50 dark:hover:bg-gray-600/85 dark:active:bg-gray-600/85',
        galleryNavigation: 'p-nav-button-fluid md:p-12 [&_svg]:size-16',
        galleryNavigationInfoModal: 'p-nav-button-fluid dark:bg-gray-600/50 dark:hover:bg-gray-600/85 md:p-12 [&_svg]:size-16',
        form: 'flex h-10 gap-1 rounded-md bg-gray-800 px-4 py-2 text-sm text-white ring-offset-background hover:bg-gray-800/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-600/85',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(buttonVariants({ variant, className }))} {...props} />
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
