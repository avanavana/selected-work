import animate from 'tailwindcss-animate';

import type { Config } from "tailwindcss";

export const colors = {
  'gray-lighter': '#dddde0',
  'gray-light': '#cccccf',
  'gray-medium': '#666669',
  'gray-dark': '#222225'
}

const widths = {
  maximum: '1500px',
  mid: '896px',
  minimum: '640px',
}

export const screens = {
  ...widths,
  'max-height': { raw: '(max-height:1080px)' }
}

export const width = {
  ...widths
}

export const height = {
  maximum: '896px'
}

export const spacing = {
  normal: '38px',
  double: '76px'
}

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      screens,
      width,
      height,
      spacing
    }
  },
  plugins: [animate]
} satisfies Config
