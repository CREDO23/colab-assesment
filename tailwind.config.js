/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'yellow': '#FEA02A',
        'yellow-200' : 'rgba(250, 217, 174, 0.849)',
        'blue' : '#6E97FF',
        'green' : '#45DFCD',
        'pink' : '#FF6DCD'
      }
    },
  },
  plugins: [],
}
