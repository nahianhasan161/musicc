/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#131313",
        black_100: "#1C1C1C",
        yellow: "#d8e588",
        border_color: "rgba(48,48,48,0.8)",
        white_300: "#E6E6E6",
        white_100: "#adadad",
        bt_color: "#272727",
      },
      transitionProperty: { 'scale': 'scale' } ,
      fontFamily:{
        'AmsiPro-BI' : 'AmsiPro-BoldItalic',
        'AmsiPro-SB' : 'AmsiPro-SemiBold',
        'AmsiPro-L' : 'AmsiPro-Light',
        'AmsiProNarw-L' : 'AmsiProNarw-Light',
        'AmsiProNarw-LI' : 'AmsiProNarw-LightItalic',
        'AmsiProNarw-SBI' : 'AmsiProNarw-SemiBoldItalic',
        'AmsiProNarw-BI' : 'AmsiProNarw-BoldItalic',
        'AmsiProNarw-BlackI' : 'AmsiProNarw-BlackItalic',
        'AmsiProNarw-U' : 'AmsiProNarwUltra',
        'AmsiProNarw-BlackI' : 'AmsiProNarw-BlackItalic'
      }
    },
  },
  plugins: [],
  
};
