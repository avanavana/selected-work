import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'

interface ToastOptions {
  duration?: number
  id: string
  message: ReactNode
}

interface ToasterElement {
  toast: (options: Omit<ToastOptions, 'id'>) => void
}

const Toaster = forwardRef<ToasterElement>((_, ref) => {
  const [ toasts, setToasts ] = useState<ToastOptions[]>([])

  useImperativeHandle(ref, () => ({
    toast: ({ message, duration = 5000 }: Omit<ToastOptions, 'id'>) => {
      const id = crypto.randomUUID()
      setToasts([ { id, message, duration } ])

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, duration)
    }
  }))

  return (
    <div
      className="pointer-events-none absolute bottom-5 left-1/2 flex h-16 w-full -translate-x-1/2 items-center justify-center"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            role="alert"
            className="announcement sm:max-w-auto pointer-events-auto absolute flex max-w-[80%] gap-1.5 rounded-md bg-popover px-6 py-4 text-center font-bold text-popover-foreground shadow-lg sm:whitespace-nowrap sm:text-left [&_svg]:hidden sm:[&_svg]:block"
            initial={{ opacity: 0, scale: 0.95, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            exit={{ opacity: 0, scale: 0.95, y: 100, transition: { duration: 0.25, ease: 'easeInOut' } }}
            onAnimationComplete={(definition) => {
              if (definition === 'exit') setToasts([])
            }}
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
})

Toaster.displayName = 'Toaster'

export { Toaster, type ToasterElement }
