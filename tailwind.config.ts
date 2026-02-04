import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFD700 100%)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        appearFromRight: {
          "0%": { opacity: "0.3", transform: "translate(15%, 0px);" },
          "100%": { opacity: "1", transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        'primary-focus': 'var(--primary-focus)',
        'secondary-focus': 'var(--secondary-focus)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkmodern: {
          "base-content": "#F5F5F5", // Blanco cálido - excelente contraste
          "primary": "#FFD700",      // Amarillo dorado vibrante
          "primary-content": "#000000",
          "secondary": "#1A1A1A",    // Negro suave
          "secondary-content": "#F5F5F5",
          "accent": "#FFD700",       // Amarillo para acentos
          "neutral": "#1A1A1A",      // Fondo negro principal
          "base-100": "#0a0a0a",     // Negro muy oscuro
          "base-200": "#1A1A1A",     // Negro suave
          "base-300": "#2D2D2D",     // Gris oscuro
          "info": "#FFD700",
          "success": "#22c55e",
          "warning": "#FFD700",
          "error": "#dc2626",

          "--primary-focus": "#E6C200",
          "--secondary-focus": "#000000",
        }
      }
    ]
  },
};
export default config;
