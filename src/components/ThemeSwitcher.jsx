import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const themeStyles = {
  cyan: {
    "--accent": "#67e8f9",
    "--accent-soft": "rgba(103, 232, 249, 0.12)",
  },
  violet: {
    "--accent": "#c4b5fd",
    "--accent-soft": "rgba(196, 181, 253, 0.12)",
  },
  emerald: {
    "--accent": "#6ee7b7",
    "--accent-soft": "rgba(110, 231, 183, 0.12)",
  },
};

export default function ThemeSwitcher() {
  const { themeName, setThemeName, themes } = useTheme();

  useEffect(() => {
    const selected = themeStyles[themeName];

    Object.entries(selected).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [themeName]);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl md:flex">
      {Object.keys(themes).map((name) => (
        <button
          key={name}
          onClick={() => setThemeName(name)}
          className={`mx-1 h-7 w-7 rounded-full border transition ${
            themeName === name ? "scale-110 border-white" : "border-white/20"
          } ${
            name === "cyan"
              ? "bg-cyan-300"
              : name === "violet"
              ? "bg-violet-300"
              : "bg-emerald-300"
          }`}
          aria-label={`Switch to ${name} theme`}
        />
      ))}
    </div>
  );
}