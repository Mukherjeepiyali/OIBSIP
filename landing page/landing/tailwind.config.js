/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path as per your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['UrbanJungle', 'sans-serif'], // Register your custom font
        secondary: ['Delicate Caligraphy', 'serif'],
        third:['SAMAN___','san-serif'],
      },
      strokeWidth: {
        '4': '4px',
        // add more custom values if needed
      },
    },
  },
  plugins: [],
};
