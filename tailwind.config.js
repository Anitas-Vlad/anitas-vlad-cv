/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          my: "#323232",
          apple: "#1d1d1f",
        },
        green: "#81A88F",
        yellow: "#DDCCA1",
        light: "#F5F5F7",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(green, gransparent, green)'
      }
    },
  },
  plugins: [],
};
