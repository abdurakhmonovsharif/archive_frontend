/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        archive_primary: "#254DAF",
        archive_bg_dark: "#252c3f",
        archive_border: "#E6ECF8",
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
