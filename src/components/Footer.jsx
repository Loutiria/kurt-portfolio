import { Mail } from "lucide-react";

export default function Footer({ goToPage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <button onClick={() => goToPage("home")} className="text-left">
            <h2 className="text-2xl font-black">Kurt Panolino</h2>

            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Virtual Assistant | Administrative & Digital Operations Support
            </p>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kurutopanorino@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 p-3 text-slate-300 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Email Kurt Panolino"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
        © {currentYear} Kurt Panolino. Built with React, Tailwind, and structured UI systems.
      </div>
    </footer>
  );
}