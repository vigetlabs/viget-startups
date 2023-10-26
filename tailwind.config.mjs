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
      secondary: '#434248',
    },
    fontFamily: {
      sans: ['Geomanist', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      '2xl': [48, 1.15],
      xl: [32, 'auto'],
      lg: [24, 1.5],
      md: [20, 'auto'],
      sm: [16, 1.5],
      xs: [14, 'auto'],
    },
    extend: {
      backgroundImage: {
        'card-gradient-1': 'var(--gradient-card-1)',
        'card-gradient-2': 'var(--gradient-card-2)',
        'card-gradient-3': 'var(--gradient-card-3)',
        'card-gradient-4': 'var(--gradient-card-4)',
      },
    },
  },
  plugins: [],
}
