/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        bgprimary: {
          100: "#0F0E17",
          200: "#1D1C25",
          300: "#32313B",
          400: "#282733",
          500: "#636180",
          600: "#0F0E17",
          trans: "rgba(50, 49, 59, 0.44)",
        },
        zeewYellow: {
          100: "#FFEAAC",
          200: "#FFCB94",
          300: "#FFA477",
        },
        zeewPink: {
          100: "#FF67A4",
          200: "#FF7EAE",
          300: "#FF718F",
        },
        zeewPurple: "#3E005B",
        zeewBlue: {
          100: "#81A7DB",
          200: "#7E89C5",
          300: "#8C81DB ",
        },
        zeewDurazno: "FFAEAE",
        white: "rgb(221, 221, 221)",
        green: colors.green,
      },
      width: {
        100: "26rem",
        110: "28rem",
        120: "30rem",
        124: "32rem",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fill,minmax(300px,1fr))",
        "responsive-250": "repeat(auto-fill,minmax(250px,1fr))",
        responsive150: "repeat(auto-fill,minmax(150px,1fr))",
        responsive250: "repeat(auto-fill,minmax(250px,1fr))",
        projectContent: "300px 1fr",
      },
    },
  },
  plugins: [],
};
