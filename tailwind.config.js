/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./assets",  "./css"],
  theme: {
    extend: {
      boxShadow:{
        custom: '10px 10px 0px 0px #111111',
      },
      
    },
    container: {
      center: true
    },
    colors: {
      yellow: {
        DEFAULT: "#F4D04E",
      },
      white: {
        DEFAULT: "hsl(0, 0%, 100%)"
      },
      gray: {
        light: "#6B6B6B",
        dark: "#111111"
      }
    },
    screens: {
      sm: "375px",
      lg: "1440px"
    },
    
  },
  plugins: [],
}