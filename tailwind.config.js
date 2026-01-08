// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1320px", // keep line length optimal
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // highly readable font
        recoleta: ["Recoleta", "serif"],
      },
      fontSize: {
        sm: ["16px", { lineHeight: "1.6" }],
        base: ["18px", { lineHeight: "2" }], // body text
        lg: ["20px", { lineHeight: "1.7" }],
        xl: ["24px", { lineHeight: "1.6" }],
        "2xl": ["30px", { lineHeight: "1.4" }],
        "3xl": ["36px", { lineHeight: "1.3" }],
        "4xl": ["48px", { lineHeight: "1.2" }],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        tilt: "tilt 5s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
