/** @type {import('tailwindcss').Config} */
module.exports = {
  //ADD PURGE BELOW
  content: ["./pages/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1440px",
    },
    fontSize: {
      base: ["16px", "24px"],
      lg: ["20px", "27px"],
      xl: ["36px", "44px"],
      "2xl": ["40px", "49px"],
    },
    extend: {
      colors: {
        "primary-black": "#363434",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        righteous: ["Righteous", "cursive"],
      },
      //ADD TYPOGRAPHY
      // REFERENCE: https://www.youtube.com/watch?v=xXQsF0q8KUg
      // WATCH FROM 14:28
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
