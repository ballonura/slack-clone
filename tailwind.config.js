/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: "#d3d3d3",
      "dark-gray": "#404040",
      "light-gray": "#c3c3c3",
      "lighter-gray": "#F8F8F8",
      "faux-dark-purple": "#350d36",
      "dark-purple": "#3F0E40",
      "hover-purple": "#49254a",
      "input-purple": "#431e44",
      "online-green": "#2BAC76",
      "msg-input-hover": "#1264a3"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
