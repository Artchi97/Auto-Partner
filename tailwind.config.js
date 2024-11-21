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
      },
      keyframes: {
        pulseText: {
          "0%": { opacity: 0.9 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0.9 },
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
