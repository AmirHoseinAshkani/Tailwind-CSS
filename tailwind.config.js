/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {

    extend: {
      container:{
        center:true,
        padding:'1rem',
      },

      fontFamily: {
        Vazirmatn: ["vazirmatn"],
      },
    },
  },
  plugins: [
    [require("flowbite/plugin")],

    function ({ addComponents }) {

      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen sm": {
            maxWidth: "540px",
          },

          "@screen md": {
            maxWidth: "720px",
          },

          "@screen lg": {
            maxWidth: "960px",
          },

          "@screen xl": {
            maxWidth: "1140px",
          },

          "@screen 2xl": {
            maxWidth: "1300px",
          },

        },

      });

    },

  ],
  
};
