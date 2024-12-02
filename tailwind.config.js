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
        text_primary:'#6C6C6C'
      },
    },
  },
  plugins: [],
}