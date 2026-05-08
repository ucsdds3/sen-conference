/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "social-proof-marquee": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "social-proof-marquee-reverse": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "social-proof-marquee": "social-proof-marquee 36s linear infinite",
        "social-proof-marquee-reverse":
          "social-proof-marquee-reverse 36s linear infinite",
      },
    },
  },
};
