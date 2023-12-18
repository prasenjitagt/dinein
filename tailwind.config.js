/** @type {import('tailwindcss').Config} */
module.exports = {
  theme:{
    extend:{
      colors:{
        "myGreenDark": "#009C1A",
        
        "myGreenLight":"#26CC00",
        
        "myRed":"#EF4444",
      }
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b9ff",

          secondary: "#00826f",

          accent: "#bc7900",

          neutral: "#0c0205",


          info: "#00bfff",

          success: "#008626",

          warning: "#ffa200",

          error: "#ff5078",

        },
      },
    ],
  },
};
