/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep scientific dark-slate foundation
        base: '#0B1117',
        surface: {
          primary: '#141E28',
          secondary: '#0F1720',
          tertiary: '#1A2735',
        },
        ink: {
          main: '#F1F5F9',
          secondary: '#94A3B8',
          tertiary: '#64748B',
          subtle: '#475569',
        },
        border: {
          warm: '#223242',
          darker: '#1B2835',
          light: '#2E4356',
        },
        // Accents (scientifically restrained & vibrant on dark)
        qteal: {
          50: '#0E2A30',
          100: '#133D45',
          200: '#185662',
          300: '#1E7585',
          400: '#168C91',
          500: '#1EB3BA',
          600: '#38D9E0',
          700: '#6EE7ED',
        },
        eblue: {
          50: '#112238',
          100: '#173254',
          200: '#1E4678',
          300: '#2A61A6',
          400: '#3979D6',
          500: '#4F8EE8',
          600: '#75A9F0',
          700: '#A4C6F7',
        },
        fgreen: {
          50: '#0F261B',
          100: '#163B2B',
          200: '#1F543E',
          300: '#2B7254',
          400: '#4D8B69',
          500: '#5BA880',
          600: '#7AC09C',
          700: '#A3D9BD',
        },
        mviolet: {
          50: '#1F1738',
          100: '#2C2052',
          200: '#3F2F75',
          300: '#57429F',
          400: '#8067C7',
          500: '#9B82E0',
          600: '#B6A1EB',
          700: '#D2C3F5',
        },
        wamber: {
          50: '#2E1E0A',
          100: '#422C0E',
          200: '#5F3E14',
          300: '#85561A',
          400: '#D69A36',
          500: '#E2AC4C',
          600: '#ECC06D',
          700: '#F5D798',
        },
        // Deep slate for technical visualization zones
        deep: {
          slate: '#0E1721',
          darkblue: '#131F2E',
          navy: '#080E14',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 8px 30px rgba(22, 140, 145, 0.15)',
        'deep': '0 12px 36px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
};
