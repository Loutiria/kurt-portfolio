import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  cyan: { name: "cyan" },
  violet: { name: "violet" },
  emerald: { name: "emerald" },
};

function getInitialTheme() {
  if (typeof window === "undefined") return "cyan";

  const saved = localStorage.getItem("portfolio-theme");

  if (saved && themes[saved]) {
    return saved;
  }

  return "cyan";
}

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}