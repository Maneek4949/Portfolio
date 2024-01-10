/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fontFamily: {
          'centra': ['Centra', 'sans-serif'],
        },
        backgroundImage: {
          'hero': "url('./assets/img/color-sharp.png')",
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      colors:{
        hpink:"#ff059b",
        iconcolor:"#9d00f8",
        probg1:"#aa367c80",
        probg2:"#4a2fbd80",
        trans:"#5f9ea000",
        inputbg:"#1e1f26",
        footerbg:"#120024e1",
        allbg:"#1e1f26",
      }
    },
  },
  plugins: ['tailwindcss-animated'],
}

