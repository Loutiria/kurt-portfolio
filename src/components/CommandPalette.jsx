import { useEffect, useMemo, useState } from "react";
import { Download, ExternalLink, Mail, Search, X } from "lucide-react";
import { navItems } from "../data/portfolioData";

export default function CommandPalette({ scrollTo }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

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

  const actions = useMemo(
    () => [
      ...navItems.map((item) => ({
        label: `Go to ${item}`,
        group: "Navigation",
        action: () => scrollTo(item),
      })),
      {
        label: "Download Resume",
        group: "Actions",
        icon: Download,
        action: () => window.open("/Kurt-Panolino-Resume.pdf", "_blank"),
      },
      {
        label: "Send Email",
        group: "Actions",
        icon: Mail,
        action: () =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=kurutopanorino@gmail.com&su=Portfolio%20Inquiry",
            "_blank"
          ),
      },
      {
        label: "Open LinkedIn",
        group: "External",
        icon: ExternalLink,
        action: () =>
          window.open(
            "https://www.linkedin.com/in/kurt-panolino-8a5ab4410/",
            "_blank"
          ),
      },
    ],
    [scrollTo]
  );

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-black/60 px-4 backdrop-blur-sm">
      <div className="mx-auto mt-24 max-w-xl rounded-3xl border border-white/10 bg-[#0b111c] p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex flex-1 items-center gap-3 text-slate-300">
            <Search size={18} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {filtered.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setOpen(false);
                  setQuery("");
                }}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-[var(--accent)]"
              >
                <span>{item.label}</span>
                {Icon && <Icon size={16} />}
              </button>
            );
          })}

          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-slate-500">No command found.</p>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-500">Shortcut: Ctrl + K</p>
      </div>
    </div>
  );
}