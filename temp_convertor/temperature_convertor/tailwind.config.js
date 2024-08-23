module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cinematic': ['"Cinzel Decorative"', 'cursive'], // Example cinematic font
      },
      colors: {
        primary: '#0d0d0d',
        accent: '#ffd700',  // Gold color for accent
      },
    },
  },
  plugins: [],
}
