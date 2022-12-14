/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        95: "23rem",
        42: "11.5rem",
        34: "44rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
