/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fefae0",
        secondary: "#D99445",
        accent: "#DE99A3",
        light: "#74FF5C",
        dark: "#283618",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
