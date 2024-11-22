/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B341',
          50: '#E6F9ED',
          100: '#CCF3DB',
          200: '#99E7B7',
          300: '#66DB93',
          400: '#33CF6F',
          500: '#00B341',
          600: '#008F34',
          700: '#006B27',
          800: '#00471A',
          900: '#00230D',
        }
      }
    },
  },
  plugins: [],
};