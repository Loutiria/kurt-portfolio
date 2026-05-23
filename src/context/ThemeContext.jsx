import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  cyan: {
    name: "cyan",
    accent: "text-cyan-300",
    bg: "bg-cyan-300",
    border: "border-cyan-300/40",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-300 via-blue-400 to-violet-400",
  },
  violet: {
    name: "violet",
    accent: "text-violet-300",
    bg: "bg-violet-300",
    border: "border-violet-300/40",
    glow: "shadow-violet-500/20",
    gradient: "from-violet-300 via-fuchsia-400 to-cyan-400",
  },
  emerald: {
    name: "emerald",
    accent: "text-emerald-300",
    bg: "bg-emerald-300",
    border: "border-emerald-300/40",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-300 via-teal-400 to-cyan-400",
  },
};

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("cyan");

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, setThemeName, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}