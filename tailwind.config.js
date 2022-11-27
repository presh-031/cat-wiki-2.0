/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "mystery-quest": ["Mystery Quest", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-image-lg": "url('/HeroImagelg.png')",
        "hero-image-md": "url('/HeroImagemd.png')",
        "hero-image-sm": "url('/HeroImagesm.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
