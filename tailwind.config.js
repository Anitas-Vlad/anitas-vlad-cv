/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        dark: {
          my: "#323232",
          apple: "#1d1d1f",
        },
        green: "#81A88F",
        yellow: "#DDCCA1",
        light: "#F5F5F7",
        orange: {
          power: "#F42F26",
          tab: "#FD5B49",
        },
        blue: {
          tab: "#40728C",
          power: "#006DAF"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(green, gransparent, green)",
      },
    },
  },
  plugins: [],
};
