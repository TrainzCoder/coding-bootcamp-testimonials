module.exports = {
  purge: {
    enabled:true, 
    content: ['./*.html']
  },
   darkMode: false,
   theme: {
     extend: {
       colors: {
         "Dark-Blue": "var(--Dark-Blue)",
         GrayishBlue: "var(--Grayish-Blue)"
       },
       fontFamily: {
        inter: ["Inter", "sans-serif"]
       }
     },
   },
   variants: {},
   plugins: [],
 }