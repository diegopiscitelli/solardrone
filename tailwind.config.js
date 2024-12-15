/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0 0 0 0.25rem rgb(25 135 84 / 25%)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-primeui")],
};
