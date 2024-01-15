/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-clr": "#E2614B",
        "black-clr": "#060811",
      },
    },
  },
  plugins: [],
};
