import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        honey: '#F0C674',
        dark: '#0E0F10',
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'monospace'],
        'pressStart2p': ['Press Start 2P', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '2px 2px 0px rgba(0, 0, 0, 0.8)',
        'pixel-dark': '2px 2px 0px rgba(255, 255, 255, 0.8)',
        'pixel-pressed': '1px 1px 0px rgba(0, 0, 0, 0.8)',
        'pixel-pressed-dark': '1px 1px 0px rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'pixel-press': 'pixelPress 0.1s ease-in-out',
      },
      keyframes: {
        pixelPress: {
          '0%': { transform: 'translate(0, 0)', boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)' },
          '100%': { transform: 'translate(1px, 1px)', boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
