/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        darkGrey: '#181818',
        lightGrey: '#747474',
        grey: '#222222',
        purple: '#6C5CE7',
        white: '#ffffff',
        orange: '#F39C12',
        green: '#2ecc71',
        red: '#e74c3c',
        gradientPrimaryFallback: '#FF464E',
        gradientSecondaryFallback: '#FF9966',
      }
    },
  },
  plugins: [],
}