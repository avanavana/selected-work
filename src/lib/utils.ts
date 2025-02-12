import { Children, isValidElement } from 'react'
import { z } from 'zod'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import parsePhoneNumber from 'libphonenumber-js'

import { rawHeightLimits } from '../../tailwind.config'

import type { ReactElement, ReactNode } from 'react'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasChildren(element: ReactNode): element is ReactElement<{ children: ReactNode | ReactNode[] }> {
  return isValidElement<{ children?: ReactNode[] }>(element) && Boolean(element.props.children)
}

export function childToString(child?: ReactNode): string {
  if (typeof child === 'undefined' || child === null || typeof child === 'boolean') return ''

  if (JSON.stringify(child) === '{}') return ''
  return child.toString()
}

export function getChildrenAsText(children: ReactNode | ReactNode[]): string {
  if (!(children instanceof Array) && !isValidElement(children)) return childToString(children)

  return Children.toArray(children).reduce((text: string, child: ReactNode): string => {
    let newText = ''
    if (hasChildren(child)) newText = getChildrenAsText(child.props.children)
    else if (isValidElement(child)) newText = ''
    else newText = childToString(child)
    return text.concat(newText)
  }, '')
}

export function getCurrentQuarter(): string {
  const now = new Date();
  const year = now.getFullYear();
  const quarter = Math.ceil((now.getMonth() + 1) / 3);
  return `Q${quarter} ${year}`;
}

export function extractNumber(value: string): number {
  return parseFloat(value.replace(/[^\d.]/g, ''))
}

type RawHeightLimits = Record<keyof typeof rawHeightLimits, number>
type HeightLimits = Record<keyof typeof rawHeightLimits, { raw: string }>

export function rawHeightLimitsToHeightLimits(rawHeightLimits: RawHeightLimits): HeightLimits {
  return Object.entries(rawHeightLimits as RawHeightLimits).reduce((a, [ k, v ]) => {
      a[k as keyof typeof rawHeightLimits] = { raw: `(max-height:${v}px)` }
      return a
    }, {} as HeightLimits)
}

export function createFileDownload(filename: string) {
  const link = document.createElement('a')
  link.href = `/files/${filename}`
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function generateImageSources(images: string[]): string[][] {
  const BASE_URL = import.meta.env.VITE_CDN_URL

  return images.map((id) => [
    `${BASE_URL}/work/image-${id}.webp`,
    `${BASE_URL}/work/png/image-${id}.png`,
    `${BASE_URL}/work/sm/image-${id}.webp`,
    `${BASE_URL}/work/sm/png/image-${id}.png`,
    `${BASE_URL}/work/md/image-${id}.webp`,
    `${BASE_URL}/work/md/png/image-${id}.png`,
    `${BASE_URL}/work/lg/image-${id}.webp`,
    `${BASE_URL}/work/lg/png/image-${id}.png`
  ])
}

function getOptimalSource(sources: string[], isWebPSupported: boolean): string | null {
  if (!sources.length) return null

  const format = isWebPSupported ? 'webp' : 'png'

  return (
    sources.find((src) => src.includes(`lg/${format}`)) ||
    sources.find((src) => src.includes(`md/${format}`)) ||
    sources.find((src) => src.includes(`sm/${format}`)) ||
    sources.find((src) => src.includes(`/work/image-`) && src.endsWith(`.${format}`)) ||
    sources.find((src) => src.includes(`png`)) ||
    sources[0]
  )
}

export function preloadImage(cache: Map<string, Promise<void>>, sources: string[], isWebPSupported: boolean): Promise<void> {
  const src = getOptimalSource(sources, isWebPSupported)
  if (!src) return Promise.resolve()
  if (cache.has(src)) return cache.get(src)!

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
    img.onerror = reject
  })

  cache.set(src, promise)
  return promise
}

export const zPhoneNumber = z
  .string()
  .trim()
  .transform((value) => (value === '' ? value : value.trim()))
  .refine((value) => {
    if (value === '') return true
    const phoneNumber = parsePhoneNumber(value, { defaultCountry: 'US' })
    return phoneNumber?.isValid()
  }, {
    message: 'Invalid phone number'
  })
  .transform((value) => {
    if (value === '') return value
    const phoneNumber = parsePhoneNumber(value, { defaultCountry: 'US' })
    return phoneNumber ? phoneNumber.formatInternational() : value
  })


  export const setAbortableTimeout = (callback: () => void, timeout: number, signal: AbortSignal) => {
    const timer = setTimeout(() => {
      if (!signal.aborted) callback()
    }, timeout)

    return timer
  }
