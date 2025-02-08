import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'button flex items-center justify-center bg-gray-800/50 hover:bg-gray-800/85 active:bg-gray-800/85 backdrop-blur-sm whitespace-nowrap text-lg text-gray-300 hover:text-white font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'size-12 rounded-full motion-safe:hover:scale-105',
        infoModal: 'size-12 rounded-full dark:bg-gray-600/50 dark:hover:bg-gray-600/85 dark:active:bg-gray-600/85 motion-safe:hover:scale-105',
        galleryNavigation: 'p-nav-button-fluid md:p-12 [&_svg]:size-16',
        galleryNavigationInfoModal: 'p-nav-button-fluid md:p-12 [&_svg]:size-16 dark:bg-gray-600/50 dark:hover:bg-gray-600/85',
        form: 'bg-gray-800 dark:bg-gray-600 hover:bg-gray-800/85 dark:hover:bg-gray-600/85 h-10 px-4 py-2 rounded-md text-white text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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
