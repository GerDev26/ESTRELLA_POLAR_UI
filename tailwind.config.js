/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'night-blue': {
          '50': '#f1f9fe',
          '100': '#e3f0fb',
          '200': '#c0e2f7',
          '300': '#88cbf1',
          '400': '#48b1e8',
          '500': '#2198d6',
          '600': '#1379b6',
          '700': '#106094',
          '800': '#12527a',
          '900': '#123d5a',
          '950': '#0e2c43',
          'main': '#123d5a'
        },
      },
    },
  },
  plugins: [],
}
