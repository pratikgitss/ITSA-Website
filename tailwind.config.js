import colors from 'tailwindcss/colors';
import aspectRatio from '@tailwindcss/aspect-ratio';

module.exports = {
  content: ["./src/**/*.jsx", "./index.html"], // updated
  darkMode: "class", // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
      backgroundImage: {
        // "hero": "url('src/assets/hero-bg.jpg')",
        "header": "url('/img/header.png')",  
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
    fontSmoothing: ["hover", "focus"],
  },
  plugins:[aspectRatio], 
};