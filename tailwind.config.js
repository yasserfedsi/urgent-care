/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#379cf6", // Primary color
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add your custom font
      },
    },
  },
  plugins: [],
};
