import { z } from 'zod'

import { zPhoneNumber } from '@/lib/utils'

const inquiryTypes = [ 'Job Opportunity', 'Freelance Work Opportunity', 'Other' ]

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  title: z.string().optional(),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
  phone: zPhoneNumber.optional(),
  type: z.string().refine(value => inquiryTypes.includes(value), { message: 'Please choose a type from the options above' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' })
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const defaultFormValues: ContactFormValues = {
  name: '',
  title: '',
  email: '',
  phone: '',
  type: '',
  subject: '',
  message: ''
}

export { contactFormSchema, defaultFormValues, type ContactFormValues }
