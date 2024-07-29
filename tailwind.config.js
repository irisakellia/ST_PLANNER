/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   colors: {
      customButton: 'rgb(31, 145, 156)',
    },},
  },
  plugins: [],
}