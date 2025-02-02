import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/styles.ts',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px) rotate(-4deg)' },
        '100%': { opacity: '1', transform: 'translateY(0) rotate(-4deg)' },
      },
    },
    utilities: {
      '.animation-delay-200': {
        'animation-delay': '200ms',
      },
    },
    extend: {
      colors: {
        primary: '#f52041', //64FF4B F53250
        secondary: '#190737',
        background: '#130f23',
        third: '#801beb',
        divider: '#ffffff32',
        white: '#ffff',
        black: '#000',
      },
      fontFamily: {
        Inter: ['var(--font-inter)'],
        Monserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    nextui({
      theme: {},
    }),
  ],
};
export default config;
