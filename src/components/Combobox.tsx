import React, { forwardRef, useEffect } from 'react'
import { Check, ChevronDown, ListFilter } from 'lucide-react'

import { Button } from '@/components/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/Command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { ScrollArea } from '@/components/ScrollArea'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Tooltip'

import { cn } from '@/lib/utils'

export interface ComboboxOption {
  value: string
  label: React.ReactNode
}

export type ComboboxProps = {
  options: ComboboxOption[]
  emptyText?: string
  clearable?: boolean
  selectPlaceholder?: string
  searchPlaceholder?: string
  value?: string[]
  onValueChange?: (value: string[]) => void
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const ComboboxButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & ComboboxProps>(({ className, ...props }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          role='combobox'
          aria-expanded={props.open}
          className={cn('w-full h-12 px-3 justify-between gap-2 rounded-full bg-gray-dark-translucent-50 hover:bg-gray-dark-translucent-85 data-[state=open]:bg-gray-dark-translucent-85 active:scale-100 border-0 text-white hover:text-white text-sm font-bold [&_svg]:hover:text-white transition-all duration-500 ease-in-out', { 'w-12 justify-center': props.value && props.value.length === props.options.length })}
        >
          <ListFilter className='size-4 shrink-0 text-gray-lighter' />
          {props.value && props.value.length !== props.options.length && (
            <span className='line-clamp-1 text-left'>
              {props.value && (
                <span className='inline-flex items-center justify-center font-bold bg-gray-medium rounded-full size-6 mr-2'>{props.value.length}</span>
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
          {props.value && props.value.length !== props.options.length && <ChevronDown className={cn('size-4 shrink-0 rotate-0 transition-all text-gray-lighter', { 'rotate-180': open })} />}
        </Button>
      </PopoverTrigger>
    </TooltipTrigger>
    <TooltipContent>Filter by category</TooltipContent>
  </Tooltip>
))

const Combobox = forwardRef((props: ComboboxProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <Popover open={props.open} onOpenChange={props.setOpen}>
    <ComboboxButton {...props} />
    <PopoverContent
      align='center'
      className='p-0 border-0 bg-gray-dark-translucent-85 backdrop-blur-sm shadow-none font-bold'
    >
      <Command className='bg-transparent'>
        <CommandInput ref={ref} className='text-white placeholder:font-normal placeholder:text-gray-light' placeholder={props.searchPlaceholder ?? 'Search for an option'} />
        <CommandList>
          <CommandEmpty>{props.emptyText ?? 'No results found'}</CommandEmpty>
          <CommandGroup>
            <ScrollArea>
              <div className='max-h-60'>
                {props.options.map((option) => (
                  <CommandItem
                    className={cn('text-gray-light transition-colors font-normal data-[selected=true]:bg-transparent border border-transparent data-[selected=true]:border-gray-medium data-[selected=true]:text-gray-light cursor-pointer disabled:cursor-not-allowed', { 'font-bold text-white data-[selected=true]:text-white': props.value?.includes(option.value) })}
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
                    <Check className={cn('text-gray-light size-4 opacity-0', { 'opacity-100': props.value?.includes(option.value) })} />
                    {option.label}
                  </CommandItem>
                ))}
              </div>
            </ScrollArea>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
))

Combobox.displayName = 'Combobox'

export { Combobox }
