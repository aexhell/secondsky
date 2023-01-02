module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: 'Hahmlet',
      sans: 'Inter, sans-serif'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        midnight: {
          100: '#0E0B13'
        },
        crimson: {
          100: '#1f040a'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
