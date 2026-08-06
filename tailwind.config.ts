import type { Config } from 'tailwindcss'

/**
 * CampusTax design tokens.
 * Rules:
 * 1. Gold text only on navy-700/800/900/950, or gold as CTA bg with navy-900 text.
 * 2. Links on light surfaces: navy-600. Links on dark: gold-400.
 * 3. error is for form validation only. Never as a brand color.
 * 4. #0B5240 (WHV green) must never appear anywhere.
 * All pairs used in the UI passed WCAG AA (see brand guide).
 */
const config: Config = {
  future: { hoverOnlyWhenSupported: true },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F4F6FB',
          100: '#E6EAF5',
          200: '#C9D2E9',
          300: '#A3B1D6',
          400: '#7488BC',
          500: '#4D63A0',
          600: '#374B82',
          700: '#2A3A6B',
          800: '#1E2A5A',
          900: '#162044',
          950: '#0C1128',
        },
        gold: {
          50: '#FBF6E4',
          100: '#F6EBC2',
          200: '#EFDB90',
          300: '#E9CA64',
          400: '#E3B93C',
          500: '#C9A227',
          600: '#A8861D',
          700: '#7E6414',
          800: '#5B480E',
          900: '#3D3009',
        },
        cream: '#FAF7F0',
        ink: {
          DEFAULT: '#212843',
          secondary: '#4E5675',
          muted: '#7B82A0',
        },
        success: '#0F7A4A',
        error: '#B42318',
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
