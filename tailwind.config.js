/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: "Roboto",
      },
    },
  },
  plugins: [],
};
