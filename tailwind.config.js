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
        white: 'var(--color-white)',



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



        'dark-primary': 'var(--color-dark-primary)',
        'dark-bright': 'var(--color-dark-bright)',
        'dark-medium': 'var(--color-dark-medium)',
        'dark-bight': 'var(--color-dark-light)',

        primary: 'var(--color-primary)',
        'primary-bright': 'var(--color-primary-bright)',

        'info-error': 'var(--color-info-error)',
        'info-success': 'var(--color-info-success)',
        'info-warn': 'var(--color-info-warn)',

        fontFamily: {
          manrope: 'var(--font-manrope)',
          'space-grotesk': 'var(--font-space-grotesk)',
        }
      },
      plugins: [],
    }
  }
}