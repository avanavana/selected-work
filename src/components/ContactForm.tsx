import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleCheck, TriangleAlert, X } from 'lucide-react'

import { Button } from '@/components/Button'
import { DialogContent, DialogDescription, DialogHeader, DialogPortal, DialogTitle } from '@/components/Dialog'
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/Form'
import { Input } from '@/components/Input'
import KeyboardCommand from '@/components/KeyboardCommand'
import { ScrollArea } from '@/components/ScrollArea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Select'
import Spinner from '@/components/Spinner'
import { Textarea } from '@/components/Textarea'
import { TouchTooltip } from '@/components/TouchTooltip'

import { cn } from '@/lib/utils'
import { contactFormSchema, defaultFormValues, ContactFormValues } from '@/lib/schemas'

type FormState = 'error' | 'idle' | 'pending' | 'success'

interface ErrorMessageProps {
  id?: string
  name: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name, ...props }) => {
  const { formState: { errors } } = useFormContext()

  return (
    <AnimatePresence>
      {errors[name] && (
        <motion.span className='error-message flex items-center gap-1 text-destructive text-sm' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} {...props}>
          <TriangleAlert size={14} strokeWidth={2} />
          {errors[name]?.message as string | undefined}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

ErrorMessage.displayName = 'ErrorMessage'

const SuccessMessage: React.FC = (props) => (
  <motion.div
    className='flex gap-2 bg-green-50/85 dark:bg-success border border-success text-success dark:text-white dark:font-bold dark:border-0 py-3 px-4 rounded-sm motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    {...props}
  >
    <CircleCheck size={24} strokeWidth={2} /> Your message was successfully sent. Thanks for reaching out!
  </motion.div>
)

SuccessMessage.displayName = 'SuccessMessage'

const CloseContactFormButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick }, ref) => (
  <TouchTooltip variant='infoModal' content={<>Close<KeyboardCommand esc /></>}>
    <Button ref={ref} aria-label='Close' variant='infoModal' className={className} onClick={onClick}><X size={24} strokeWidth={2} /></Button>
  </TouchTooltip>
))

CloseContactFormButton.displayName = 'CloseContactFormButton'

interface ContactFormProps {
  onClose: () => void
  open: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose, open }) => {
  const [ formState, setFormState ] = useState<FormState>('idle')
  const [ formError, setFormError ] = useState<string | null>(null)
  const [ selectOpen, setSelectOpen ] = useState<boolean>(false)
  const [ contactModalRequiresScroll, setContactModalRequiresScroll ] = useState<boolean>(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const contactFormRef = useRef<HTMLDivElement | null>(null)

  /**
   *  Note: form schema is defined in a separate /lib/schema.ts file
   */

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      ...defaultFormValues
    }
  })

  /**
   *  Note: calculate the height of the contact form relative to the height of its container
   *  to determine if scrolling is required in order to display scroll-friendly styles
   */

  const updateContactModalDimensions = useCallback(() => {
      setTimeout(() => {
        if (!dialogRef.current || !contactFormRef.current) return
        const dialogHeight = dialogRef.current.getBoundingClientRect().height
        const bodyHeight = contactFormRef.current.getBoundingClientRect().height
        setContactModalRequiresScroll(dialogHeight - (38 * 2) - 48 - 38 < bodyHeight)
      }, 10)
    }, [])

    useEffect(() => {
      updateContactModalDimensions()
      window.addEventListener('resize', updateContactModalDimensions)
      return () => window.removeEventListener('resize', updateContactModalDimensions)
    }, [ updateContactModalDimensions ])

  /**
   *  Note: watch the form values for changes, and clear the form server error if a previous one exists
   */

  const formValues = useWatch({ control: form.control })

  useEffect(() => {
    if (formError) setFormError(null)
  }, [ formValues ])

  /**
   *  Note: unfortunately, Radix UI's Dialog component has some nasty issues related to
   *  focus management and tab indexing, so we have to manually remove the tab index
   *  from the dialog, using a MutationObserver to watch for when it gets added to the
   *  component, since Radix will continually attempt to add it back on, so that we can
   *  have normal and consistent tab indexing behavior on the input fields within the form
   */

  useEffect(() => {
    const removeTabIndex = () => {
      setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.removeAttribute('tabindex')
        }
      }, 10)
    }

    removeTabIndex()

    const observer = new MutationObserver(removeTabIndex)

    if (dialogRef.current) {
      observer.observe(dialogRef.current, {
        attributes: true,
        attributeFilter: [ 'tabindex' ]
      })
    }

    return () => observer.disconnect()
  }, [ open ])

  const onSubmit = async (data: ContactFormValues) => {
    setFormState('pending')
    setFormError(null)

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('There was a problem sending your message. Please try again.')

      setFormState('success')
    } catch (error: any) {
      setFormState('error')
      setFormError('Could not connect to the server. Please try again.')
      console.error(error)
    }
  }

  useEffect(() => {
    if (!open) setTimeout(() => {
      form.reset({ ...defaultFormValues })
      setFormState('idle')
    }, 0)
  }, [ open, form ])

  /**
   *  Note: more issues with Radix UI—the below useEffect prevents interference between the select dialog
   *  and the Radix UI ScrollArea component.
   *
   *  And since this hook relies on the open state of the form, we also hook in here with a call to
   *  updateContactModalDimensions() to add special styles (e.g. gradient masks on the top and bottom,
   *  and appropriate padding) to the scroll area when the form content is longer than the viewport height.
   */

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        document.querySelectorAll('[role=listbox], [data-radix-select-viewport]').forEach((el) => {
          el.remove()
        })
      }, 10)
    }

    updateContactModalDimensions()
  }, [ open ])

  return (
    <DialogPortal>
      <DialogContent
        ref={dialogRef}
        aria-live='off'
        type='contact'
        className={cn('block px-0 z-[70] pb-normal gap-normal max-w-full', { 'requires-scroll': contactModalRequiresScroll })}
        onEscapeKeyDown={(e) => {
          if (selectOpen) {
            setSelectOpen(false)
            e.preventDefault()
            return
          }

          e.preventDefault()
          e.stopPropagation()
          onClose()
        }}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <FormProvider {...form}>
          <ScrollArea className='h-full'>
            <div ref={contactFormRef} className='max-w-sm justify-self-center mx-auto'>
              <DialogHeader className='flex flex-col px-normal gap-2 md:gap-2 mb-normal motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter'>
                <DialogTitle>Get in touch</DialogTitle>
                <DialogDescription className='dark:text-gray-300'>For work opportunities or general inquiries, please contact me using the form below.</DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='px-normal space-y-6 plausible-event-name=contact-form-submitted'>
                  {formState === 'success' ? (
                    <SuccessMessage />
                  ) : (
                    <>
                      <FormField control={form.control} name='name' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-100'>
                          <FormLabel>Name</FormLabel>
                          <FormControl><Input aria-errormessage='error-name' aria-required {...field} /></FormControl>
                          <ErrorMessage id='error-name'name='name' />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='title' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-200'>
                          <FormLabel optional>Title</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='email' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-300'>
                          <FormLabel>Email</FormLabel>
                          <FormControl><Input aria-errormessage='error-email' aria-required {...field} /></FormControl>
                          <ErrorMessage id='error-email' name='email' />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='phone' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-400'>
                          <FormLabel optional>Phone</FormLabel>
                          <FormControl><Input aria-errormessage='error-phone' aria-required {...field} /></FormControl>
                          <ErrorMessage id='error-phone' name='phone' />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='type' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-500'>
                          <FormLabel>Inquiry type</FormLabel>
                          <FormControl>
                            <Select
                              aria-errormessage='error-type'
                              aria-required
                              open={selectOpen}
                              onOpenChange={setSelectOpen}
                              onValueChange={(value) => field.onChange(value || '')}
                              value={field.value || ''}
                            >
                              <SelectTrigger
                                ref={field.ref}
                                onBlur={() => field.onBlur()}
                                aria-invalid={!!form.formState.errors.type}
                              >
                                <SelectValue placeholder='Select an option' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='Job Opportunity'>Job Opportunity</SelectItem>
                                <SelectItem value='Freelance Work Opportunity'>Freelance Work</SelectItem>
                                <SelectItem value='Other'>Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <ErrorMessage id='error-type' name='type' />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='subject' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-600'>
                          <FormLabel>Subject</FormLabel>
                          <FormControl><Input aria-errormessage='error-subject' aria-required {...field} /></FormControl>
                          <ErrorMessage id='error-subject' name='subject' />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name='message' render={({ field }) => (
                        <FormItem className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-700'>
                          <FormLabel>Message</FormLabel>
                          <FormControl><Textarea aria-errormessage='error-message' aria-required className='min-h-40' {...field} /></FormControl>
                          <ErrorMessage id='error-message' name='message' />
                        </FormItem>
                      )} />
                    </>
                  )}
                  <div className='motion-safe:opacity-0 motion-safe:translate-y-3 motion-safe:animate-slide-enter motion-safe:delay-800'>
                    <Button
                      variant='form'
                      {...(formState === 'pending' && { 'aria-busy': true, 'aria-disabled': true, disabled: true })}
                      {...(formState === 'success' && { onClick: onClose })}
                      {...(formState === 'success' ? { type: 'button' } : { type: 'submit' })}
                    >
                      {formState === 'pending' ? <Spinner /> : formState === 'error' ? 'Try again' : formState === 'success' ? 'Done' : 'Send message'}
                    </Button>
                  </div>
                  <AnimatePresence>
                    {formError && (
                      <motion.p
                        aria-role='alert'
                        aria-live='assertive'
                        className='text-destructive text-sm mt-2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {formError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </Form>
            </div>
          </ScrollArea>
        </FormProvider>
        <CloseContactFormButton className='gallery-top-right shrink-0' onClick={onClose} />
      </DialogContent>
    </DialogPortal>
  )
}

ContactForm.displayName = 'ContactForm'

export default ContactForm
