/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        35: "35",
      },
      height: {
        128: "42rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin", "tailwind-scrollbar", "@tailwindcss/forms"),
  ],
};
