/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./assets",  "./css"],
  theme: {
    extend: {},
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
    }
  },
  plugins: [],
}