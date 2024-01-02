/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        myAnim: {
          "0%": { tranform: "translate(0)" },
          "20%": { tranform: "translate(-5px,5px)" },
          "40%": { tranform: "translate(-5px,-5px)" },
          "60%": { tranform: "translate(5px,5px)" },
          "80%": { tranform: "translate(5px,-5px)" },
          "100%": { tranform: "translate(0)" },
        },
      },
      animation: {
        vibrate: "myAnim 2s linear 0s infinite normal forwards",
      },
    },
  },
  plugins: [],
};
