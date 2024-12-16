/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#E1DDD6",
        secondary: "#0C2828",
        tertiary: "#B7E1C0",
      },
      backgroundImage: {
        footerImage: "url('./assets/footerImage.webp')",
      }
    },
  },
  plugins: [],
}