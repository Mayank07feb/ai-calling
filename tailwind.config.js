module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing Brand Colors
        primary: "#B7854A",
        secondary: "#F9F6F1",

        primaryOrange: "#F97316",
        primaryOrangeLight: "#FDBA74",
        primaryOrangeDark: "#C2410C",

        white: "#FFFFFF",
        gray200: "#E5E7EB",
        gray600: "#4B5563",
        gray700: "#374151",
        gray800: "#1F2937",
        textOrange100: "#FFDAB3",

        heroOverlayLight: "rgba(0,0,0,0.4)",
        heroOverlayMedium: "rgba(0,0,0,0.6)",
        heroOverlayDark: "rgba(0,0,0,0.7)",

        green: "#22C55E",
        blue: "#3B82F6",
        purple: "#A855F7",
        red: "#EF4444",
        pink: "#EC4899",

        footerBg: "#7C2D12",

        blurOrange: "rgba(251,191,36,0.3)",
        blurYellow: "rgba(253,230,138,0.3)",

        // ⭐ NEW Gradient Color Groups ⭐
        primaryx: {
          light: "#f97316",
          DEFAULT: "#ea580c",
          dark: "#c2410c",
        },
        purplex: {
          light: "#a855f7",
          DEFAULT: "#9333ea",
          dark: "#7e22ce",
        },
        pinkx: {
          light: "#ec4899",
          DEFAULT: "#db2777",
        },
        cyanx: {
          light: "#22d3ee",
          DEFAULT: "#06b6d4",
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
