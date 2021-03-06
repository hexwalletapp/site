const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "hex-0": "#ffdb01",
        "hex-1": "#ff851f",
        "hex-2": "#ff3d3d",
        "hex-3": "#ff0f6f",
        "hex-4": "#fe01fa",

        "pls-0": "#ff0000",
        "pls-1": "#e619e6",
        "pls-2": "#8000ff",
        "pls-3": "#0080ff",
        "pls-4": "#00eaff",

        gray: colors.neutral,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
