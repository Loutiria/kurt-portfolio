import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const themeStyles = {
  cyan: {
    "--accent": "#67e8f9",
    "--accent-soft": "rgba(103, 232, 249, 0.12)",
    "--accent-gradient":
      "linear-gradient(135deg, #67e8f9, #3b82f6)",
  },
  violet: {
    "--accent": "#c4b5fd",
    "--accent-soft": "rgba(196, 181, 253, 0.12)",
    "--accent-gradient":
      "linear-gradient(135deg, #c4b5fd, #d946ef)",
  },
  emerald: {
    "--accent": "#6ee7b7",
    "--accent-soft": "rgba(110, 231, 183, 0.12)",
    "--accent-gradient":
      "linear-gradient(135deg, #6ee7b7, #14b8a6)",
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
    <div className="fixed bottom-4 left-4 z-50 flex rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-xl md:bottom-6 md:left-6">
      {Object.keys(themes).map((name) => (
        <button
          key={name}
          type="button"
          onClick={() => setThemeName(name)}
          className={`mx-1 h-7 w-7 rounded-full border transition active:scale-95 ${
            themeName === name
              ? "scale-110 border-white shadow-lg"
              : "border-white/20"
          }`}
          style={{
            background:
              name === "cyan"
                ? "linear-gradient(135deg, #67e8f9, #3b82f6)"
                : name === "violet"
                ? "linear-gradient(135deg, #c4b5fd, #d946ef)"
                : "linear-gradient(135deg, #6ee7b7, #14b8a6)",
          }}
          aria-label={`Switch to ${name} theme`}
          title={`${name} theme`}
        />
      ))}
    </div>
  );
}