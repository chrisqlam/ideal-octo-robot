/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        broadsheet: "Broadsheet",
        jost: "Jost",
        texgyreheros: "Texgyreheros",
      },
    },
  },
  plugins: [],
};
