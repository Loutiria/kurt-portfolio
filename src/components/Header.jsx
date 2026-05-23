import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/portfolioData";

export default function Header({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    scrollTo(item);
    setMenuOpen(false);
  };

  const navClass =
    "relative text-[15px] font-medium tracking-wide capitalize text-slate-300 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full";

  const hoverAccent = (event) => {
    event.currentTarget.style.color = "var(--accent)";
  };

  const resetHover = (event) => {
    event.currentTarget.style.color = "";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 text-left"
        >
          <div className="grid h-11 w-11 place-items-center rounded-2xl border theme-accent-border theme-accent-soft font-bold theme-accent-text shadow-lg">
            KP
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none">Kurt Panolino</h1>
            <p className="mt-1 text-sm text-slate-400">Resume Portfolio</p>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              onMouseEnter={hoverAccent}
              onMouseLeave={resetHover}
              className={navClass}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="rounded-xl border border-white/10 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="block w-full py-3 text-left capitalize text-slate-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}