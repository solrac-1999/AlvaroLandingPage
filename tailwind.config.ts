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
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
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
        light: {
          "base-content": "1c293e",//"#131B24",
          "primary": "#005aa3",
          "primary-content": "#ffffff",
          "secondary": "#4b5872",
          "accent": "#6b4e79",
          "neutral": "#d5e6f7",
          "base-100": "#ffffff",
          "base-200": "#F5F5F5",
          "base-300": "#E0E0E0",
          "info": "#00264c",
          "success": "#84cc16",
          "warning": "#fde047",
          "error": "#ae1919",

          "--primary-focus": "#005aa3eb",
          "--secondary-focus": "#4b5872eb",
        },
        dark: {
          "base-content": "#E5E9F0", 
          "primary": "#3A7AC5",      
          "secondary": "#8795A1",    
          "accent": "#B58BD9",       
          "neutral": "#394452",       
          "base-100": "#1A202C",      
          "info": "#5A8CC8",          
          "success": "#7FB519",      
          "warning": "#FACC15",       
          "error": "#E63B3B",         
        
          "--primary-focus": "#3A7AC5CC"  
        }
      }
    ]
  },
};
export default config;
