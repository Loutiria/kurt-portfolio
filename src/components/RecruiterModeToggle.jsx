import { Briefcase, X } from "lucide-react";
import { useRecruiterMode } from "../context/RecruiterModeContext";

export default function RecruiterModeToggle() {
  const { recruiterMode, setRecruiterMode } = useRecruiterMode();

  return (
    <button
      type="button"
      onClick={() => setRecruiterMode(!recruiterMode)}
      className={`fixed right-5 top-20 z-50 hidden items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium backdrop-blur-xl transition md:flex ${
        recruiterMode
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
          : "border-white/10 bg-black/30 text-slate-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      }`}
    >
      {recruiterMode ? <X size={16} /> : <Briefcase size={16} />}
      {recruiterMode ? "Exit Recruiter Mode" : "Recruiter Mode"}
    </button>
  );
}