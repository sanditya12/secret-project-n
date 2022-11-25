/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "netflix-sans": ["NetflixSans", "sans-serif"],
      },
      colors: {
        "light-grey": "#E4E5E4",
        grey: "#B0B0B0",
        dark: "#141414",
        white: "#ffffff",
        light: "#e5e5e5",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 10%,rgba(20,20,20,.35) 20%,rgba(20,20,20,.58) 25%,#141414 30%,#141414 90%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
