import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#15120E',
          soft: '#1D1914',
        },
        ivory: {
          DEFAULT: '#F4EEE4',
          dim: '#E8DFD0',
        },
        umber: {
          DEFAULT: '#2E2118',
          light: '#3E2C1F',
        },
        copper: {
          DEFAULT: '#B0663D',
          light: '#C98459',
          muted: '#8C593B',
        },
        sand: '#D8CBB4',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        modo: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
