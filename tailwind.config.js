/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0E1528",
        red: "#FF004C",
        peach: "#FFCBA5",
        gray: "#847CA1"
      },
    },
  },
  plugins: [],
};
