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
        dark: 'var(--dark)',
        darkGrey: 'var(--darkGrey)',
        lightGrey: 'var(--lightGrey)',
        grey: 'var(--grey)',
        purple: 'var(--purple)',
        white: 'var(--white)',
        orange: 'var(--orange)',
        green: 'var(--green)',
        red: 'var(--red)',
        gradientPrimaryFallback: 'var(--gradientPrimaryFallback)',
        gradientSecondaryFallback: 'var(--gradientSecondaryFallback)',
      }
    },
  },
  plugins: [],
}