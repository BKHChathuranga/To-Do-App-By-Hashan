/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        n:{
          1:"#FFFFFF",
          2:"#8A33FD",
          3:"#FF3B30",
          4:"#242426",
          5:"#0E0C15",
          6:"#D0D5DD"
        }
      }
    },
  },
  plugins: [],
}

