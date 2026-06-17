import { createContext } from "react";

export const COLOR_PRESETS = [
  {
    name: "Green",
    accent: "#1E5128",
    accentLight: "#4CAF50",
    accentSurface: "#e8f5e9",
    bannerBg: "#c8e6c9",
    bannerText: "#1b5e20",
  },
  {
    name: "Purple",
    accent: "#6A1B9A",
    accentLight: "#AB47BC",
    accentSurface: "#f3e5f5",
    bannerBg: "#e1bee7",
    bannerText: "#4a148c",
  },
];

export const ThemeContext = createContext();
