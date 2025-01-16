import animate from 'tailwindcss-animate';

import type { Config } from "tailwindcss";

export const colors = {
  'gray-lighter': '#dddde0',
  'gray-light': '#cccccf',
  'gray-medium': '#666669',
  'gray-dark': '#222225'
} as const

const widths = {
  maximum: '1500px',
  mid: '896px',
  minimum: '640px',
} as const

type RawHeightLimits = Record<keyof typeof rawHeightLimits, number>
type HeightLimits = Record<keyof typeof rawHeightLimits, { raw: string }>

export const rawHeightLimits = {
  'max-height': 1080,
  'mid-height': 623,
  'min-height': 445
} as const

export const screens = {
  ...widths,
  ...Object.entries(rawHeightLimits as RawHeightLimits).reduce((a, [ k, v ]) => {
    a[k as keyof typeof rawHeightLimits] = { raw: `(max-height:${v}px)` }
    return a
  }, {} as HeightLimits)
} as const

export const width = {
  ...widths
} as const

export const height = {
  maximum: '896px'
} as const

export const spacing = {
  normal: '38px',
  double: '76px'
} as const

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      screens,
      width,
      height,
      spacing,
      flex: {
        full: '0 0 100%'
      }
    }
  },
  plugins: [animate]
} satisfies Config
