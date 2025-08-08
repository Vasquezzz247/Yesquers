module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
}