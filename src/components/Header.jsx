import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navItems } from "../data/portfolioData";

export default function Header({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    scrollTo(item);
    setMenuOpen(false);
  };

  const navClass =
    "relative text-[15px] font-medium tracking-wide capitalize text-slate-300 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all hover:text-[var(--accent)] hover:after:w-full";

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${scrolled? "bg-[#070b12]/95 py-1": "bg-[#070b12]/80 py-0"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 text-left">
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
            <button key={item} onClick={() => handleClick(item)} className={navClass}>
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
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#070b12]/95 px-5 py-4 md:hidden"
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="rounded-2xl px-4 py-3 text-left capitalize text-slate-300 transition active:scale-[0.98]"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}