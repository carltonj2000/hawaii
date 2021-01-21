module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        icon: "#01216f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
