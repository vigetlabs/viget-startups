import { pxPair, pxBoundsToFluidRem } from './config/tailwind/helpers'

/**
  IMPORTANT: PostCSS Converts all `px` values to `rem`
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '<sm': { max: '549.98px' },
      '<md': { max: '767.98px' },
      '<lg': { max: '1023.98px' },
      '<xl': { max: '1439.98px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      primary: '#27262D',
      gray: '#F4F4F5',
    },
    spacing: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
      ...pxPair(4),
      ...pxPair(8),
      ...pxPair(12),
      ...pxPair(16),
      ...pxPair(20),
      ...pxPair(24),
      ...pxPair(26),
      ...pxPair(28),
      ...pxPair(32),
      ...pxPair(36),
      ...pxPair(40),
      ...pxPair(48),
      ...pxPair(56),
      ...pxPair(64),
      ...pxPair(72),
      ...pxPair(80),
      ...pxPair(88),
      ...pxPair(96),
      ...pxPair(112),
      ...pxPair(120),
      ...pxPair(160),
    },
    borderRadius: {
      none: '0',
      full: '9999px',
      20: '20px',
      40: '40px',
    },
    fontFamily: {
      sans: ['Geomanist', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      '4xl': [pxBoundsToFluidRem(36, 60), 1],
      '4xl-static': [60, 1],
      '3xl': [pxBoundsToFluidRem(32, 56), 1.15],
      '3xl-static': [48, 1.15],
      '2xl': [pxBoundsToFluidRem(28, 40), 1.15],
      '2xl-static': [40, 1.15],
      xl: [pxBoundsToFluidRem(24, 32), 1.2],
      'xl-static': [32, 1.2],
      lg: [pxBoundsToFluidRem(20, 24), 1.3],
      'lg-static': [24, 1.3],
      md: [pxBoundsToFluidRem(18, 20), 1.4],
      'md-static': [20, 1.4],
      sm: [pxBoundsToFluidRem(15, 16), 1.4],
      'sm-static': [16, 1.4],
      xs: [14, 1.3],
    },
    extend: {
      backgroundImage: {
        'card-gradient-1': 'var(--gradient-card-1)',
        'card-gradient-2': 'var(--gradient-card-2)',
        'card-gradient-3': 'var(--gradient-card-3)',
        'card-gradient-4': 'var(--gradient-card-4)',
      },
      maxWidth: (theme) => ({
        ...theme('spacing'),
        '8xl': '1360px',
      }),
    },
  },
  plugins: [],
}
