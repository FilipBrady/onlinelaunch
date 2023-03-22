/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/index.tsx',
    './src/**'
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'blue' : {
        'default': '#1E2D3D',
        'dark': '#192633',
        'darker': '#192531'
      },
      'green': '#0BD89F',
      'red': '#D94741',
      'pink': '#E65E77',
      'yellowwhite': '#ECEAD7',
      'grey': {
        'default':'#D9D9D9',
        'darker':'#E2E2E2',
      }
    
    }
  },
  plugins: [],
}
