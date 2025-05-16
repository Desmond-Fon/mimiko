/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        1: "7deg",
        3: "20deg",
        2: "-3deg",
        4: "1deg",
        5: "5.3deg",
        6: "3.4deg",
        7: "2deg",
        8: "7.2deg",
        9: "12deg",
      },
    },
  },
  plugins: [],
};

