import {
  Home,
  FolderKanban,
  Briefcase,
  Mail,
  Workflow,
} from "lucide-react";

const items = [
  { label: "Home", icon: Home, page: "home" },
  { label: "Projects", icon: FolderKanban, page: "projects" },
  { label: "Flow", icon: Workflow, page: "workflow" },
  { label: "Exp", icon: Briefcase, page: "experience" },
  { label: "Contact", icon: Mail, page: "contact" },
];

export default function MobileBottomNav({ activePage, goToPage }) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-3xl border border-white/10 bg-black/55 p-2 backdrop-blur-xl md:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const active = activePage === item.page;

        return (
          <button
            key={item.page}
            type="button"
            onClick={() => goToPage(item.page)}
            className={`flex min-w-[54px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[11px] transition active:scale-95 ${
              active
                ? "bg-white/10 text-[var(--accent)]"
                : "text-slate-300"
            }`}
          >
            <Icon size={17} />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}