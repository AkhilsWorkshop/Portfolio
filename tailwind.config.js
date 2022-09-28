/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#ABDF12",
      "secondary": "#F3F0EB",
      "third": "#8892b0",
      "fourth": "#43665D",
      "fifth": "#111234",
      "sixth": "#112240",
      black: "black",
    },
    extend: {},
    fontFamily: {
      slogan: ["Ubuntu"],
    }
  },
  plugins: [],
}
