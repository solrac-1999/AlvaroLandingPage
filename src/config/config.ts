import { ConfigProps } from "./config.types";

// REQUIRED (no https://, not trialing slash at the end, just the naked domain)
const domainName = "alvaropersonaltrainer.com";

const config = {
  // REQUIRED
  appName: "Alvaro Personal Trainer",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Entrenamiento personal profesional para transformar tu cuerpo y vida. Planes personalizados de entrenamiento y nutrición adaptados a tus objetivos.",
  // REQUIRED
  domainName: domainName,
  social: {
    instagram: "https://instagram.com/alvaropersonaltrainer",
    facebook: "https://facebook.com/alvaropersonaltrainer",
    youtube: "https://youtube.com/@alvaropersonaltrainer",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "darkmodern",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "#FFD700",
  },
} as ConfigProps;

export default config;
