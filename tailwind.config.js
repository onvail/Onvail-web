/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#7C1AFC',
      dark_bg: '#0E0E0E',
      white_2: '#EEEEEE',
      purple_2: '#9747FF',
      gray_1: '#9B9B9B',
      gray_2: '#191919',
      gray_3: '#656565',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      hanken_grotesk: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
