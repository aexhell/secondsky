/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["'Inter'", 'sans-serif']
    },
    extend: {
      keyframes: {
        slideup: {
          '0%': { transform: 'transform(0px, 0px)' },
          '100%': { transform: 'transform(0px, -15px)' },
        }
      },
      colors: {
        transparent: 'transparent',
        transculent: '#0000004f',
        white: '#ffffff',
        black: '#000000',
        gray: '#333333',
        aethra: {
          50: '#100A12',
          100: '#241F2C',
          200: '#423B4C',
          500: '#6E588D',
          600: '#CAA6FF'
        }
      }
    }
  },
  plugins: [],
}
