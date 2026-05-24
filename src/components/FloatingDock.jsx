import { ArrowUp, Download, Mail } from "lucide-react";

export default function FloatingDock({ goToPage }) {
  const handleEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kurutopanorino@gmail.com&su=Portfolio%20Inquiry",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const items = [
    {
      label: "Home",
      icon: ArrowUp,
      action: () => goToPage("home"),
    },
    {
      label: "Resume",
      icon: Download,
      href: "/Kurt-Panolino-Resume.pdf",
    },
    {
      label: "Email",
      icon: Mail,
      action: handleEmail,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
      {items.map((item) => {
        const Icon = item.icon;

        const content = (
          <>
            <Icon size={18} />

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs opacity-0 transition-all group-hover:max-w-24 group-hover:opacity-100">
              {item.label}
            </span>
          </>
        );

        const className =
          "group flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 text-slate-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]";

        return item.href ? (
          <a key={item.label} href={item.href} className={className}>
            {content}
          </a>
        ) : (
          <button
            key={item.label}
            type="button"
            onClick={item.action}
            className={className}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}