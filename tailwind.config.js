/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'centra': ['Centra', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./assets/img/color-sharp.png')",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' }, // 1turn = 360deg
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'inner': 'rotate 180s linear infinite reverse',
        'item-inner': 'rotate 180s linear infinite',
        'outer': 'rotate 180s linear infinite',
        'item-outer': 'rotate 180s linear infinite reverse',
         orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      colors: {
        hpink: "#ff059b",
        iconcolor: "#9d00f8",
        probg1: "#aa367c80",
        probg2: "#4a2fbd80",
        trans: "#5f9ea000",
        inputbg: "#1e1f26",
        footerbg: "#120024e1",
        allbg: "#1e1f26",
      },
    },
  },
  plugins: [],
};
