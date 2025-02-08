import { forwardRef, useId } from 'react'
import { Check, ChevronDown, ListFilter } from 'lucide-react'

import { Button } from '@/components/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/Command'
import KeyboardCommand from '@/components/KeyboardCommand'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { ScrollArea } from '@/components/ScrollArea'
import { TouchTooltip } from '@/components/TouchTooltip'

import { cn } from '@/lib/utils'

export interface ComboboxOption {
  value: string
  label: React.ReactNode
}

export interface ComboboxProps {
  clearable?: boolean
  emptyText?: string
  forceHideTooltip?: boolean
  onValueChange?: (value: string[]) => void
  open?: boolean
  options: ComboboxOption[]
  searchPlaceholder?: string
  selectPlaceholder?: string
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  variant?: 'infoModal'
  value?: string[]
}

export interface ComboboxContentProps extends Omit<ComboboxProps, 'open' | 'setOpen'> {
  id?: string
  type?: 'popover' | 'inline'
}

const ComboboxTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & ComboboxProps>(({ className, forceHideTooltip, id, variant, ...props }, ref) => (
  <TouchTooltip forceHide={forceHideTooltip} content={<>{props.open ? 'Close' : 'Filter by category'}<KeyboardCommand command keys={[ 'K' ]} /></>} {...(variant && { variant })}>
    <PopoverTrigger asChild>
      <Button
        ref={ref}
        role='combobox'
        aria-controls={id}
        aria-haspopup='listbox'
        aria-multiselectable
        aria-label={props.open ? 'Close' : 'Filter by category'}
        aria-expanded={props.open}
        className={cn('w-full h-12 px-3 justify-between gap-2 rounded-full bg-gray-800/50 hover:bg-gray-800/85 data-[state=open]:bg-gray-800/85 active:scale-100 border-0 text-white hover:text-white text-sm font-bold [&_svg]:hover:text-white transition-all duration-500 ease-in-out', { 'dark:bg-gray-600/50 dark:hover:bg-gray-600/85 dark:data-[state=open]:bg-gray-600/85': variant === 'infoModal' }, { 'w-12 justify-center': props.value && props.value.length === props.options.length })}
      >
        <ListFilter className='size-4 shrink-0 text-gray-200' />
        {props.value && props.value.length !== props.options.length && (
          <span className='line-clamp-1 text-left'>
            {props.value && (
              <span className='inline-flex items-center justify-center font-bold bg-gray-600 rounded-full size-6 mr-2'>{props.value.length}</span>
            )}

            {props.value && props.value.length === 1 && (
              <span>{props.options.find((option) => option.value === props.value?.[0])?.label}</span>
            )}

            {props.value && props.value.length > 1 && props.value.length !== props.options.length && (
              <span>categories selected</span>
            )}

            {!props.value || (props.value.length === 0 && (props.selectPlaceholder ?? 'Select an option'))}
          </span>
        )}
        {props.value && props.value.length !== props.options.length && <ChevronDown className={cn('size-4 shrink-0 rotate-0 transition-all text-gray-200', { 'rotate-180': props.open })} />}
      </Button>
    </PopoverTrigger>
  </TouchTooltip>
))

const ComboboxContent = forwardRef(({ id, type = 'inline', variant, ...props }: ComboboxContentProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <Command id={id} className={cn('bg-transparent', { 'motion-safe:animate-slide-enter': type === 'inline' })}>
    <CommandInput ref={ref} type={type} className={cn(type === 'inline' ? '!text-mobile-menu placeholder:text-mobile-menu text-gray-800 placeholder:text-gray-300 h-mobile-menu-input' : 'text-white placeholder:font-normal placeholder:text-gray-300', { 'dark:placeholder:text-gray-500': type === 'inline'})} placeholder={props.searchPlaceholder ?? 'Search for an option'} />
    <CommandList>
      <CommandEmpty>{props.emptyText ?? 'No results found'}</CommandEmpty>
      <CommandGroup className={cn({ 'px-0': type === 'inline' })}>
        <ScrollArea>
          <div className='max-h-60'>
            {props.options.map((option) => (
              <CommandItem
                className={cn(
                  type === 'inline'
                    ? '!text-mobile-menu leading-mobile-menu px-mobile-menu-x py-mobile-menu-y rounded-mobile-menu data-[selected=true]:bg-gray-200/35 dark:data-[selected=true]:bg-gray-500/35 data-[selected=true]:backdrop-blur-sm [&_svg]:size-mobile-menu-icon'
                    : 'text-gray-300 transition-colors font-normal data-[selected=true]:bg-transparent border border-transparent data-[selected=true]:border-gray-600 data-[selected=true]:text-gray-300 cursor-pointer disabled:cursor-not-allowed',
                  { 'font-bold text-white data-[selected=true]:text-white': type === 'popover' && props.value?.includes(option.value) },
                  { 'text-gray-300 data-[selected=true]:text-gray-300 dark:text-gray-500': type === 'inline' && !props.value?.includes(option.value) },
                  { 'data-[selected=true]:border-gray-500': variant === 'infoModal' }
                )}
                key={option.value}
                value={option.value.toLowerCase().trim()}
                onSelect={(selectedValue: string) => {
                  const option = props.options.find((option) => option.value.toLowerCase().trim() === selectedValue)

                  if (!option) return null

                  if (props.value?.includes(option.value)) {
                    if (!props.clearable && props.value.length === 1) return false
                    props.onValueChange?.(props.value.filter((value) => value !== option.value))
                  } else {
                    props.onValueChange?.([...(props.value ?? []), option.value])
                  }
                }}
              >
                <Check className={cn('size-4 opacity-0', type === 'inline' ? '' :'text-gray-300', { 'opacity-100': props.value?.includes(option.value) })} />
                {option.label}
              </CommandItem>
            ))}
          </div>
        </ScrollArea>
      </CommandGroup>
    </CommandList>
  </Command>
))

const Combobox = forwardRef(({ variant, ...props }: ComboboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const id = useId()

  return (
    <Popover open={props.open} onOpenChange={props.setOpen}>
      <ComboboxTrigger id={id} {...(variant && { variant })} {...props} />
      <PopoverContent
        align='center'
        id={id}
        className={cn('p-0 border-0 bg-gray-800/85 backdrop-blur-sm shadow-none font-bold', { 'dark:bg-gray-600/85': variant === 'infoModal' })}
      >
        <ComboboxContent ref={ref} type='popover' {...(variant && { variant })} {...props} />
      </PopoverContent>
    </Popover>
  )}
)

Combobox.displayName = 'Combobox'

export { Combobox, ComboboxContent, ComboboxTrigger }
