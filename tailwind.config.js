/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      robot: ["Roboto Mono", "Roboto", "sans-serif"],
    },
    spacing: {
      152: "38rem",
      "7/10": "70%",
      "7.5/10": "75%",
      "8/10": "80%",
      "8.5/10": "85%",
      "9/10": "90%",
      "9.5/10": "95%",
    },
  },
};

// eslint-disable-next-line no-undef
export const plugins = [require("@tailwindcss/typography"), require("daisyui")];

export const daisyui = {
  themes: ["light", "dark"],
};
