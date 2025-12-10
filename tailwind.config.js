module.exports = {
  theme: {
    extend: {
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(-30deg)" }
        }
      },
      animation: {
        sway: "sway 1.5s ease-in-out infinite"
      }
    }
  }
};
