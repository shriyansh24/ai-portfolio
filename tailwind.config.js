/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Transformer-themed warm color palette
        'golden-orange': '#FF8C42',
        'coral-red': '#FF6B6B',
        'warm-amber': '#FFD93D',
        'warm-white': '#FEFEFE',
        'soft-gray': '#8B8B8B',
        
        // Using CSS variables for dynamic theming
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          DEFAULT: 'var(--color-primary-500)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          DEFAULT: 'var(--color-secondary-500)',
        },
        tertiary: {
          50: 'var(--color-tertiary-50)',
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          500: 'var(--color-tertiary-500)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
          800: 'var(--color-tertiary-800)',
          900: 'var(--color-tertiary-900)',
          DEFAULT: 'var(--color-tertiary-500)',
        },
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'connection-flow': 'connectionFlow 2s infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'attention-flow': 'attention-flow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
      },
      keyframes: {
        'connectionFlow': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        'neural-pulse': {
          '0%, 100%': { 
            opacity: '0.4', 
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 rgba(255, 140, 66, 0)'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px rgba(255, 140, 66, 0.6)'
          }
        },
        'attention-flow': {
          '0%, 100%': { 
            background: 'linear-gradient(90deg, transparent, transparent)',
            transform: 'translateX(-100%)'
          },
          '50%': { 
            background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
            transform: 'translateX(0%)'
          }
        },
        'gradient-shift': {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))'
          },
          '50%': { 
            background: 'linear-gradient(45deg, var(--color-secondary), var(--color-tertiary))'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neural': 'var(--shadow-neural)',
        'attention': '0 0 20px rgba(255, 140, 66, 0.3)',
      },
      transitionTimingFunction: {
        'neural': 'var(--ease-neural)',
        'bounce-neural': 'var(--ease-bounce)',
        'smooth': 'var(--ease-smooth)',
      },
      transitionDuration: {
        'neural': 'var(--duration-neural)',
      }
    },
  },
  plugins: [],
} 