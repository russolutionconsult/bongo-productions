/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",   /* violet-500 — exact match from Lovable */
          hover: "#7C3AED",   /* violet-700 on hover */
          foreground: "#FFFFFF",
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
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(0,72%,51%)",
          foreground: "#FFFFFF",
        },
        gold: "#FBBF24",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, rgba(6,4,14,0.15) 0%, rgba(6,4,14,0.55) 50%, rgba(6,4,14,0.90) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "gradient-purple-text": "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 60%, #C084FC 100%)",
      },
      boxShadow: {
        purple: "0 8px 30px rgba(139,92,246,0.35)",
        "purple-sm": "0 4px 14px rgba(139,92,246,0.22)",
        "purple-lg": "0 16px 48px rgba(139,92,246,0.45)",
      },
    },
  },
  plugins: [],
}
