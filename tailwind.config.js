/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato : "'lato', sans-serif",
        playfair : "'playfair Display', sans-serif",
      }
    },
  },
  plugins: [],
}