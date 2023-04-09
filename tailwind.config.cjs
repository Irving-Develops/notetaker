// import { type Config } from "tailwindcss";

// export default {
  module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [ require("@tailwindcss/typography", require("daisyui"))],
};
