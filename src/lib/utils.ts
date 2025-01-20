import { Children, isValidElement } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
