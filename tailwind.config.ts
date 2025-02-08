import animate from 'tailwindcss-animate'

import { rawHeightLimitsToHeightLimits } from './src/lib/utils'

import type { Config } from 'tailwindcss'

const gray = {
  '100': '240 9.7% 93.9%',
  '200': '240 4.6% 87.3%',
  '300': '240 3% 80.6%',
  '500': '240 1.3% 53.9%',
  '600': '240 1.4% 40.6%',
  '700': '240 2.8% 27.3%',
  '800': '240 4.2% 13.9%'
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
    DEFAULT: 'hsl(var(--accent) / 85%)',
    foreground: 'hsl(var(--accent-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  success: {
    DEFAULT: 'hsl(var(--success))',
    foreground: 'hsl(var(--success-foreground))'
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
  'white': 'hsl(0 100% 100%)',
  'gray-100': `hsl(${gray['100']})`,
  'gray-200': `hsl(${gray['200']})`,
  'gray-300': `hsl(${gray['300']})`,
  'gray-500': `hsl(${gray['500']})`,
  'gray-600': `hsl(${gray['600']})`,
  'gray-700': `hsl(${gray['700']})`,
  'gray-800': `hsl(${gray['800']})`,
  'gray-800-translucent-50': `hsl(${gray['800']} / 50%)`,
  'gray-800-translucent-85': `hsl(${gray['800']} / 85%)`
} as const

const widths = {
  max: '1500px',
  xl: '1420px',
  lg: '1024px',
  md: '896px',
  sm: '640px',
  xs: '480px',
  min: '320px',
  modal: '1024px'
} as const

export const rawHeightLimits = {
  'max-height': 1042,
  'md-height': 623,
  'sm-height': 445
} as const

export const screens = {
  ...widths,
  ...rawHeightLimitsToHeightLimits(rawHeightLimits)
} as const

export const width = {
  ...widths
} as const

export const height = {
  max: '896px'
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
      width: {
        ...width,
        button: 'calc(var(--size-button) * 1px)',
        'nav-button-fluid': 'var(--size-nav-button-fluid)',
        'nav-button-max': 'calc(var(--size-nav-button-max) * 1px)',
        'mobile-menu-icon': 'var(--mobile-menu-icon-size-fluid)'
      },
      height: {
        ...height,
        button: 'var(--size-button)px',
        'mobile-menu-icon': 'var(--mobile-menu-icon-size-fluid)',
        'mobile-menu-input': 'var(--mobile-menu-input-height-fluid)'
      },
  		maxWidth: {
        ...widths
  		},
      spacing: {
        ...spacing,
        normal: 'calc(var(--spacing-normal) * 1px)',
        double: 'calc(var(--spacing-double) * 1px)',
        'nav-button-fluid': 'var(--spacing-nav-button-fluid)',
        'info-modal-fluid': 'var(--spacing-x-info-modal-fluid)',
        'info-modal-max': 'calc(calc(var(--size-nav-button-max) + var(--spacing-normal)) * 1px)',
        'mobile-menu-x': 'var(--mobile-menu-spacing-x-fluid)',
        'mobile-menu-y': 'var(--mobile-menu-spacing-y-fluid)',
        'mobile-menu-icon': 'var(--mobile-menu-icon-size-fluid)',
        'mobile-menu-gap': 'var(--mobile-menu-gap-fluid)'
      },
  		flex: {
  			full: '0 0 100%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        'mobile-menu': 'var(--mobile-menu-border-radius-fluid)'
  		},
      fontFamily: {
        mono: [ '"PF DIN Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace' ]
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        'mobile-menu': 'var(--mobile-menu-font-size-fluid)'
      },
      lineHeight: {
        'mobile-menu': 'var(--mobile-menu-line-height-fluid)'
      },
      keyframes: {
        'slide-enter': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'center-divider': {
          '0%': { width: '0%', left: '50%' },
          '100%': { width: '100%', left: '0%' }
        },
        'contact-item-hover': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '30%': { transform: 'scale(1.15) rotate(-5deg)' },
          '50%': { transform: 'scale(1.15) rotate(5deg)' },
          '70%': { transform: 'scale(1.15) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' }
        }
      },
      animation: {
        'slide-enter': 'slide-enter 0.5s ease-out forwards',
        'center-divider': 'center-divider 0.5s ease-in-out forwards',
        'contact-item-hover': 'contact-item-hover 0.5s ease-in-out'
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      }
  	}
  },
  plugins: [ animate ]
} satisfies Config
