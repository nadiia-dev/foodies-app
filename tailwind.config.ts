module.exports = {
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 100%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
        },
        "fade-slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
        "fade-slide-in-left": "fade-slide-in-left 1s ease-out forwards",
        "fade-slide-in-right": "fade-slide-in-right 1s ease-out forwards",
        "fade-slide-in-bottom": "fade-slide-in-bottom 1s ease-out forwards",
        flash: "flash 1s ease-in-out infinite alternate",
      },
    },
    boxShadow: {
      lg: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
      "text-lg": "0 0 18px rgba(248, 190, 42, 0.8)",
    },
    textShadow: {
      lg: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
};
