import { useMemo } from "react";

export default function Card({ children, className = "" }) {
  const hoverEffects = useMemo(
    () => [
      "hover:border-cyan-400/40 hover:shadow-cyan-500/20",
      "hover:border-blue-400/40 hover:shadow-blue-500/20",
      "hover:border-violet-400/40 hover:shadow-violet-500/20",
      "hover:border-emerald-400/40 hover:shadow-emerald-500/20",
      "hover:border-slate-200/30 hover:shadow-slate-400/10",
    ],
    []
  );

  const randomEffect = useMemo(() => {
    return hoverEffects[Math.floor(Math.random() * hoverEffects.length)];
  }, [hoverEffects]);

  return (
    <div
      className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${randomEffect} ${className}`}
    >
      {children}
    </div>
  );
}