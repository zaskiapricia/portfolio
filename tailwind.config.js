/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        pink: { brand: '#FF5BBC' },
        green: { brand: '#DEFA70' },
        blue: { brand: '#7153FF' },
      },
    },
  },
  plugins: [],
};
