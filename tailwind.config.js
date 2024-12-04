/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your files here
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F88C3D",
        primary_2: "#FBECD7", 
        text_primary:'#6C6C6C',
        text_blue:'#2F327D',
        text_blue1:'#696984',
        text_light:'#464646',
        icon_blue:'#23BDEE',
        text_skyblue:'#23BDEE',
      },
    },
  },
  plugins: [],
}