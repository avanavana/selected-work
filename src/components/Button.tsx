import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'button flex items-center justify-center bg-gray-dark-translucent-50 hover:bg-gray-dark-translucent-85 active:bg-gray-dark-translucent-85 backdrop-blur-sm whitespace-nowrap text-lg text-gray-light hover:text-white font-bold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'size-12 rounded-full',
        galleryNavigation: 'p-12 [&_svg]:size-16',
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(buttonVariants({ variant, className }))} {...props} />
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
