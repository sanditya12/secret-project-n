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
        "indie-flower": ["Indie Flower", "cursive"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "light-grey": "#E4E5E4",
        grey: "#B0B0B0",
        "grey-2": "#1F1F1F",
        "dark-grey": "#171717",
        dark: "#141414",
        white: "#ffffff",
        light: "#e5e5e5",
        red: "#E50914",
        "valentine-red": "#F75035",
        "valentine-background": "#F9F4EA",
        "valentine-very-light": "#FDFBF7",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 18%,rgba(20,20,20,.35) 25%,rgba(20,20,20,.58) 31%,#141414 36%,#141414 90%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
