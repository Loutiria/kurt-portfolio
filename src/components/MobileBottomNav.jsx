import {
  Home,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";

const items = [
  {
    label: "Home",
    icon: Home,
    target: "hero",
  },
  {
    label: "Projects",
    icon: FolderKanban,
    target: "projects",
  },
  {
    label: "Experience",
    icon: Briefcase,
    target: "experience",
  },
  {
    label: "Contact",
    icon: Mail,
    target: "contact",
  },
];

export default function MobileBottomNav({
  scrollTo,
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-3xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl md:hidden">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            onClick={() =>
              scrollTo(item.target)
            }
            className="flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-xs text-slate-300 transition active:scale-95"
          >
            <Icon
              size={18}
              style={{
                color: "var(--accent)",
              }}
            />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}