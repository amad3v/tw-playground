// https://daveceddia.com/tailwind-create-react-app/
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      // colors: {
      //   orange: {
      //     50: "#fff4e0",
      //     100: "#ffe4b3",
      //     200: "#ffd280",
      //     300: "#ffc04d",
      //     400: "#ffb326",
      //     500: "#ffa500",
      //     600: "#ff9d00",
      //     700: "#ff9300",
      //     800: "#ff8a00",
      //     900: "#ff7900",
      //     A100: "#ffffff",
      //     A200: "#fff8f2",
      //     A400: "#ffdabf",
      //     A700: "#ffcba6",
      //   },
      // },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    opacity: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    textOpacity: ["responsive", "hover", "focus", "active"],
  },
};
