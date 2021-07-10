module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#00556F",
        secondary: "#C59425",
        text: "#606060",
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "3/5": "60%",
        full: "100%",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#00556F",
        secondary: "#C59425",
        text: "#606060",
      }),
      backgroundColor: {
        secondary: "#F4F0E9",
        primary: "#E9F0F2",
      },
    },
  },
  variants: {},
  plugins: [],
};
