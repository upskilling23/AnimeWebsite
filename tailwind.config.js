/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxxs':'290px',
        'xxs': '365px', 
        'xs': '395px',
        'med': '450px', 
      },
      keyframes: {
        scroll: {
          '0%' :{ transform: 'translateX(100%)'},
          '100%' :{ transform: 'translateX(-100%)'},
        }
      },
      animation: {
        scroll: 'scroll 8s linear infinite',
      }}
},
  plugins: [],
}

