import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastOptions {
  duration?: number
  id: string
  message: ReactNode
}

interface ToasterElement {
  toast: (options: Omit<ToastOptions, 'id'>) => void
}

const Toaster = forwardRef<ToasterElement>((_, ref) => {
  const [ toasts, setToasts ] = useState<ToastOptions[]>([]);

  useImperativeHandle(ref, () => ({
    toast: ({ message, duration = 5000 }: Omit<ToastOptions, 'id'>) => {
      const id = crypto.randomUUID()
      setToasts([{ id, message, duration }])

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, duration)
    }
  }))

  return (
    <div
      className='absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center w-full h-16'
      aria-live='polite'
      aria-atomic='true'
    >
      <AnimatePresence>
        {toasts.map((toast, i) => (
          <motion.div
            key={toast.id}
            role='alert'
            className='announcement absolute flex gap-1.5 bg-popover text-popover-foreground font-bold px-6 py-4 rounded-md shadow-lg pointer-events-auto text-center sm:text-left max-w-[80%] sm:max-w-auto sm:whitespace-nowrap [&_svg]:hidden sm:[&_svg]:block'
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
