/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#403D39",
        secondary: "#CCC5B9",
        accent: "#EB5E28",
        light: "#FFFCF2",
        dark: "#252422",
      },
    },
  },
  plugins: [daisyui],
};
