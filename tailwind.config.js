/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',



        dark: '#121212',
        darkGrey: '#181818',
        lightGrey: '#747474',
        grey: '#222222',
        purple: '#6C5CE7',
        orange: '#F39C12',
        green: '#2ecc71',
        red: '#e74c3c',
        gradientPrimaryFallback: '#FF464E',
        gradientSecondaryFallback: '#FF9966',



        'grey-new': '#555555',
        'dark-primary': '#121212',
        'dark-bright': '#141414',
        'dark-medium': '#181818',
        'dark-light': '#202020',

        primary: '#FF464E',
        'primary-bright': '#FF6160',

        'info-error': '#E74C3C',
        'info-success': '#2ECC71',
        'info-warn': '#F39C12',
      },
      plugins: [],
    },

    fontFamily: {
      manrope: 'var(--font-manrope)',
      'space-grotesk': 'var(--font-space-grotesk)',
    }
  }
};