import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input mix-blend-multiply dark:mix-blend-normal bg-transparent px-3 py-2 text-base transition-colors ring-offset-background dark:ring-offset-gray-800/85 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 dark:text-white dark:placeholder:text-gray-600 dark:focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive dark:aria-[invalid=true]:border-destructive dark:aria-[invalid=true]:focus-visible:ring-destructive aria-[invalid=true]:focus-visible:border-border',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
