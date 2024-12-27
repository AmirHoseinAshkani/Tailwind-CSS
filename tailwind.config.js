/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    
    extend: {

      fontFamily:{
        Vazirmatn:["vazirmatn"]
      },

    },
  },
  plugins: [require("flowbite/plugin")],
};
