import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const COLOR_PRESETS = [
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

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("detrogo-dark-mode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [colorIndex, setColorIndex] = useState(() => {
    const saved = localStorage.getItem("detrogo-color-index");
    const idx = saved ? parseInt(saved, 10) : 0;
    return idx >= 0 && idx < COLOR_PRESETS.length ? idx : 0;
  });

  // Live system preference listener — only fires if user hasn't manually set a preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (localStorage.getItem("detrogo-dark-mode") === null) {
        setDarkMode(e.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const applyTheme = useCallback(() => {
    const root = document.documentElement;
    const preset = COLOR_PRESETS[colorIndex];
    root.style.setProperty("--color-accent", preset.accent);
    root.style.setProperty("--color-accent-light", preset.accentLight);
    root.style.setProperty("--color-accent-surface", preset.accentSurface);
    root.style.setProperty("--color-banner-bg", preset.bannerBg);
    root.style.setProperty("--color-banner-text", preset.bannerText);
    root.style.setProperty("--color-link", preset.accent);
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [darkMode, colorIndex]);

  useEffect(() => {
    applyTheme();
    localStorage.setItem("detrogo-dark-mode", JSON.stringify(darkMode));
    localStorage.setItem("detrogo-color-index", String(colorIndex));
  }, [darkMode, colorIndex, applyTheme]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        colorIndex,
        setColorIndex,
        presets: COLOR_PRESETS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
