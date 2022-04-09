module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "3/4": "75%",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
