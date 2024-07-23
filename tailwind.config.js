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
        secondary: "#dda15e",
        accent: "#bc6c25",
        light: "#74FF5C",
        dark: "#283618",
      },
    },
  },
  plugins: [daisyui],
};
