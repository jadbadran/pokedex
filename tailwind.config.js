/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        anim: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        anim: "anim 3s linear infinite",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%)",
      },
      borderWidth: {
        8: "8px",
      },
      screens: {
        xs: "380px",
      },
    },
    variants: {
      extend: {
        before: ["hover", "focus"],
        after: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
