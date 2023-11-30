/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
         customColor: {
           100: "#F25C71",
           200: "#B35B76",
         }
      },
    },
  },
  plugins: [],
}

