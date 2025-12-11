/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 👈 make sure Tailwind scans all files
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d9488", // teal-600
          light: "#14b8a6",   // teal-500
          dark: "#0f766e",    // teal-700
        },
      },
    },
  },
  plugins: [],
};
