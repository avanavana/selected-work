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
  mid: '876px',
  minimum: '40rem',
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

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      screens,
      width,
      height
    }
  },
  plugins: [animate]
} satisfies Config
