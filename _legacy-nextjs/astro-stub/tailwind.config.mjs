/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b2020',   /* Deep burgundy wine red */
          light: '#b03030',
          dark: '#6d1818',
        },
        accent: '#c4920a',      /* Warm gold/amber */
        foreground: '#1c1917',
        muted: '#78716c',
        background: '#ffffff',
        surface: '#fafaf9',
        border: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
