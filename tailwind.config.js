/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        coral: "#b68cff",
        aqua: "#9fd6ff",
        cream: "#f3efe7",
        sand: "#d8d0c3",
        ash: "#b8b4ad",
        lilac: "#ece2ff",
        mist: "#eef7ff",
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        velvet: "0 18px 50px rgba(16, 16, 16, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(159, 214, 255, 0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(182, 140, 255, 0.18), transparent 24%), linear-gradient(135deg, rgba(16, 16, 16, 0.9), rgba(16, 16, 16, 0.58))",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatIn: "floatIn 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
