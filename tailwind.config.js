/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // 'xs': {'max': '639px'},
      // 'sm': {'min': '640px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px', 'max': '1400px'},
      // 'xxl': {'min': '1401'}

      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1400px'
    },
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

