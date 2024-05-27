/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        beats:{
          '75%,100%':{transform: 'scale(1.6); opacity: 0;'}
        },
        'hue-rotate': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(181deg)' },
        },
        blink: {
          '0%, 15%, 85%, 100%': { opacity: 0 },
          '16%, 84%': {opacity: 1}
        }
      },
      animation: {
        'music-beat': 'beats 0.75s ease-in-out infinite',
        'hue-rotate': 'hue-rotate 5s linear infinite',
        'spin-slow': 'spin 1s linear infinite',
        'blink': 'blink 1s linear infinite',
      }
    },
  },
  plugins: [],
}