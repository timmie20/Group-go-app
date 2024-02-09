/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '390px',
      'tablet': '737px',
      'laptop': '956px',
      'desktop': '1182px',
    },
    extend: {
      colors: {
        "orange-clr": "#E2614B",
        "black-clr": "#060811",
      },
    },
  },
  plugins: [],
};
