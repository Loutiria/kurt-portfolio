import { ArrowUp, Download, Mail } from "lucide-react";

export default function FloatingDock({ scrollTo }) {
  const handleEmail = () => {
    const to = "kurutopanorino@gmail.com";
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(
      "Hi Kurt, I saw your portfolio and would like to connect."
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const items = [
    { label: "Top", icon: ArrowUp, action: () => scrollTo("hero") },
    { label: "Resume", icon: Download, href: "/Kurt-Panolino-Resume.pdf" },
    { label: "Email", icon: Mail, action: handleEmail },
  ];

  return (
    <>
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
            <button key={item.label} type="button" onClick={item.action} className={className}>
              {content}
            </button>
          );
        })}
      </div>

      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 rounded-3xl border border-white/10 bg-black/30 p-2 backdrop-blur-xl md:hidden">
        {items.map((item) => {
          const Icon = item.icon;
          const className =
            "grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-[#070b12]/80 text-slate-200 active:scale-95";

          return item.href ? (
            <a key={item.label} href={item.href} className={className}>
              <Icon size={17} />
            </a>
          ) : (
            <button key={item.label} type="button" onClick={item.action} className={className}>
              <Icon size={17} />
            </button>
          );
        })}
      </div>
    </>
  );
}