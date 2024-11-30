/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      animation: {
        "pulse-text": "pulseText 5s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-img": "fadeInImg 1s forwards",
      },
      keyframes: {
        pulseText: {
          "0%": { opacity: 0.9 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0.9 },
        },
        fadeInImg: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        mainYellow: "#F7CA4D",
        mainBlack: "#373631",
      },
    },
  },
  plugins: [],
};
