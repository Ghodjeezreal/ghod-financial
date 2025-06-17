module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.{css}'       // ← add this line!
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1C2B',
        accent: '#D4AF37',
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
