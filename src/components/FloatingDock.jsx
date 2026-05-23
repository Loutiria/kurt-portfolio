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

  const buttonClass =
    "grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)]";

  const hoverAccent = (event) => {
    event.currentTarget.style.color = "var(--accent)";
  };

  const resetHover = (event) => {
    event.currentTarget.style.color = "";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
      <button
        onClick={() => scrollTo("hero")}
        onMouseEnter={hoverAccent}
        onMouseLeave={resetHover}
        title="Back to top"
        className={buttonClass}
      >
        <ArrowUp size={18} />
      </button>

      <a
        href="/Kurt-Panolino-Resume.pdf"
        onMouseEnter={hoverAccent}
        onMouseLeave={resetHover}
        title="Download resume"
        className={buttonClass}
      >
        <Download size={18} />
      </a>

      <button
        type="button"
        onClick={handleEmail}
        onMouseEnter={hoverAccent}
        onMouseLeave={resetHover}
        title="Email Kurt"
        className={buttonClass}
      >
        <Mail size={18} />
      </button>
    </div>
  );
}