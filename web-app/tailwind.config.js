/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': '#003049',
        'vanilla': '#EAE2B7',
        'orange': '#F57E00',
        'red': '#D62828',
        'yellow': '#FCBF49',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}

