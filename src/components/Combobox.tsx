import React, { forwardRef, useState } from 'react'
import { Check, ChevronDown, ListFilter } from 'lucide-react'

import { Button } from '@/components/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/Command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { ScrollArea } from '@/components/ScrollArea'

import { cn } from '@/lib/utils'

export interface ComboboxOption {
  value: string
  label: React.ReactNode
}

type ComboboxPropsSingle = {
  options: ComboboxOption[]
  emptyText?: string
  clearable?: boolean
  selectPlaceholder?: string
  searchPlaceholder?: string
  multiple?: false
  value?: string
  onValueChange?: (value: string) => void
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

type ComboboxPropsMultiple = {
  options: ComboboxOption[]
  emptyText?: string
  clearable?: boolean
  selectPlaceholder?: string
  searchPlaceholder?: string
  multiple: true
  value?: string[]
  onValueChange?: (value: string[]) => void
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export type ComboboxProps = ComboboxPropsSingle | ComboboxPropsMultiple

const handleSingleSelect = (props: ComboboxPropsSingle, option: ComboboxOption) => {
  if (props.clearable) {
    props.onValueChange?.(option.value === props.value ? '' : option.value)
  } else {
    props.onValueChange?.(option.value)
  }
}

const handleMultipleSelect = (props: ComboboxPropsMultiple, option: ComboboxOption) => {
  if (props.value?.includes(option.value)) {
    if (!props.clearable && props.value.length === 1) return false
    props.onValueChange?.(props.value.filter((value) => value !== option.value))
  } else {
    props.onValueChange?.([...(props.value ?? []), option.value])
  }
}

const Combobox = forwardRef((props: ComboboxProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <Popover open={props.open} onOpenChange={props.setOpen}>
    <PopoverTrigger asChild>
      <Button
        role='combobox'
        variant='outline'
        aria-expanded={props.open}
        className='w-full h-12 px-6 !pr-4 justify-between gap-2 rounded-full bg-gray-dark-translucent-50 hover:bg-gray-dark-translucent-85 data-[state=open]:bg-gray-dark-translucent-85 active:scale-100 border-0 text-white hover:text-white text-sm font-bold [&_svg]:hover:text-white transition-colors'
      >
        <ListFilter className='size-4 shrink-0 text-gray-lighter' />
        <span className='line-clamp-1 text-left'>
          {props.multiple && props.value && (
            <span className='inline-flex items-center justify-center font-bold bg-gray-medium rounded-full size-6 mr-2'>{props.value.length}</span>
          )}

          {props.multiple && props.value && props.value.length === 1 && (
            <span>{props.options.find((option) => option.value === props.value?.[0])?.label}</span>
          )}

          {props.multiple && props.value && props.value.length === props.options.length && (
            <span>All categories selected</span>
          )}

          {props.multiple && props.value && props.value.length > 1 && props.value.length !== props.options.length && (
            <span>categories selected</span>
          )}

          {!props.multiple &&
            props.value &&
            props.value !== '' &&
            props.options.find((option) => option.value === props.value)?.label}

          {!props.value || (props.value.length === 0 && (props.selectPlaceholder ?? 'Select an option'))}
        </span>
        <ChevronDown className={cn('size-4 shrink-0 rotate-0 transition-all text-gray-lighter', { 'rotate-180': open })} />
      </Button>
    </PopoverTrigger>
    <PopoverContent align='start' className='p-0 border-0 bg-gray-dark-translucent-85 backdrop-blur-sm shadow-none font-bold'>
      <Command className='bg-transparent'>
        <CommandInput ref={ref} className='text-white placeholder:font-normal placeholder:text-gray-light' placeholder={props.searchPlaceholder ?? 'Search for an option'} />
        <CommandList>
          <CommandEmpty>{props.emptyText ?? 'No results found'}</CommandEmpty>
          <CommandGroup>
            <ScrollArea>
              <div className='max-h-60'>
                {props.options.map((option) => (
                  <CommandItem
                    className={cn('text-gray-light transition-colors font-normal data-[selected=true]:bg-transparent border border-transparent data-[selected=true]:border-gray-medium data-[selected=true]:text-gray-light cursor-pointer disabled:cursor-not-allowed', { 'font-bold text-white data-[selected=true]:text-white': !props.multiple && props.value === option.value }, { 'font-bold text-white data-[selected=true]:text-white': props.multiple && props.value?.includes(option.value) })}
                    key={option.value}
                    value={option.value.toLowerCase().trim()}
                    onSelect={(selectedValue: string) => {
                      const option = props.options.find((option) => option.value.toLowerCase().trim() === selectedValue)

                      if (!option) return null

                      if (props.multiple) {
                        handleMultipleSelect(props, option)
                      } else {
                        handleSingleSelect(props, option)
                        props.setOpen && props.setOpen(false)
                      }
                    }}
                  >
                    <Check className={cn('text-gray-light size-4 opacity-0', { 'opacity-100': !props.multiple && props.value === option.value }, { 'opacity-100': props.multiple && props.value?.includes(option.value) })} />
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
