import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette from dataforwomen.ai
        primary: {
          DEFAULT: "#9342FE",
          dark: "#5D05D2",
          light: "#B882FF",
        },
        accent: {
          lime: "#E9FF96",
          "lime-dark": "#E0F566",
        },
        cream: "#F0F0EF",
        dark: "#181616",
      },
      fontFamily: {
        serif: ["Antic Didone", "Georgia", "serif"],
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["105px", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading": ["40px", { lineHeight: "1.2", letterSpacing: "0.02em" }],
      },
      borderRadius: {
        pill: "70px",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
