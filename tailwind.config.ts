import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f2ece0', // warm cream base
          dark: '#e8dfcd',
          darker: '#d6cbb4',
        },
        ink: {
          DEFAULT: '#141016', // deep ink / near-black with warmth
          soft: '#2a2228',
          muted: '#6b5f59',
          faint: '#a89f96',
        },
        crimson: {
          DEFAULT: '#b8391f', // single bold accent
          dark: '#8f2813',
          light: '#d05233',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // editorial scale
        'display-xl': ['clamp(4rem, 14vw, 14rem)', { lineHeight: '0.88', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2.25rem, 6vw, 6rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.015em' }],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
