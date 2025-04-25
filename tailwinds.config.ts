/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"], // Habilitar o modo dark com uma classe
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "var(--color-body)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
};
