import animate from 'tailwindcss-animate'

import { rawHeightLimitsToHeightLimits } from './src/lib/utils'

import type { Config } from 'tailwindcss'

const gray = {
  lighter: '240 5% 87%',
  light: '240 3% 81%',
  medium: '240 1% 41%',
  dark: '240 4% 14%'
} as const

export const colors = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover) / 85%)',
    foreground: 'hsl(var(--popover-foreground))'
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  chart: {
    '1': 'hsl(var(--chart-1))',
    '2': 'hsl(var(--chart-2))',
    '3': 'hsl(var(--chart-3))',
    '4': 'hsl(var(--chart-4))',
    '5': 'hsl(var(--chart-5))'
  },
  'gray-lighter': `hsl(${gray.lighter})`,
  'gray-light': `hsl(${gray.light})`,
  'gray-medium': `hsl(${gray.medium})`,
  'gray-dark': `hsl(${gray.dark})`,
  'gray-dark-translucent-50': `hsl(${gray.dark} / 50%)`,
  'gray-dark-translucent-85': `hsl(${gray.dark} / 85%)`
} as const

const widths = {
  maximum: '1500px',
  mid: '896px',
  minimum: '640px',
  modal: '1024px'
} as const

export const rawHeightLimits = {
  'max-height': 1080,
  'mid-height': 623,
  'min-height': 445
} as const

export const screens = {
  ...widths,
  ...rawHeightLimitsToHeightLimits(rawHeightLimits)
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
    darkMode: [ 'class' ],
    content: [ './index.html', './src/**/*.{mjs,js,ts,jsx,tsx}' ],
  theme: {
  	extend: {
      colors,
      screens,
      width,
      height,
  		maxWidth: {
        ...widths
  		},
      spacing,
  		flex: {
  			full: '0 0 100%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [ animate ]
} satisfies Config
