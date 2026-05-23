export default function Footer({ scrollTo }) {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 py-10 text-sm text-slate-500">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-black text-cyan-200">
            KP
          </div>
          <p className="font-semibold text-slate-300">Kurt Panolino</p>
          <p className="mt-2 leading-6">
            Virtual Assistant, Administrative Support, and Digital Operations
            Support.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-slate-300">Navigation</p>
          <div className="grid gap-2">
            {["about", "services", "tools", "projects", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-fit capitalize hover:text-cyan-300"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-slate-300">Contact</p>
          <div className="grid gap-2">
            <a
              href="mailto:kurutopanorino@gmail.com"
              className="hover:text-cyan-300"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kurt-panolino-8a5ab4410/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              LinkedIn
            </a>
            <a
              href="/Kurt-Panolino-Resume.pdf"
              className="hover:text-cyan-300"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        © 2026 Kurt Panolino — Resume Portfolio Website
      </p>
    </footer>
  );
}