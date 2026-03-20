/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        void: "#03020a",
        plasma: "#7b2fff",
        neon: "#00f5d4",
        ember: "#ff4d00",
        star: "#fffae6",
      },
    },
  },
  plugins: [],
};