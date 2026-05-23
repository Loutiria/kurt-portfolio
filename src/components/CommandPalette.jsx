import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { navItems } from "../data/portfolioData";

export default function CommandPalette({ scrollTo }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!open) return null;

  const actions = [
    ...navItems.map((item) => ({
      label: `Go to ${item}`,
      action: () => scrollTo(item),
    })),
    {
      label: "Download Resume",
      action: () => window.open("/Kurt-Panolino-Resume.pdf", "_blank"),
    },
    {
      label: "Open LinkedIn",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/kurt-panolino-8a5ab4410/",
          "_blank"
        ),
    },
  ];

  return (
    <div className="fixed inset-0 z-[9998] bg-black/60 px-4 backdrop-blur-sm">
      <div className="mx-auto mt-28 max-w-xl rounded-3xl border border-white/10 bg-[#0b111c] p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3 text-slate-300">
            <Search size={18} />
            <span className="text-sm">Command Palette</span>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-2">
          {actions.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="rounded-2xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">Shortcut: Ctrl + K</p>
      </div>
    </div>
  );
}