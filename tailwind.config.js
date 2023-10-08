/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      }
    },
    // colors: {
    //   'woodsmoke': ''
    // }
  },
  plugins: [],
}

