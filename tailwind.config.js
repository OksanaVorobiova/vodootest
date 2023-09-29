/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "./src/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      sand: "#fcf7e6",
      black: "#000000",
      white: "#ffffff",
      cartbg: "#1e1e1e",
      backdrop: "#bbbbbb",
    },
    fontFamily: {
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      SpaceMono: ["Space Mono", "sans-serif"],
    },
  },
  plugins: [],
};
