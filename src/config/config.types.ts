export type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "blackyellow"
  | "darkmodern"
  | "";

export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  social?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  colors: {
    theme: Theme;
    main: string;
  };
}
