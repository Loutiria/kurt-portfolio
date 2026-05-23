import { Briefcase } from "lucide-react";
import { useRecruiterMode } from "../context/RecruiterModeContext";

export default function RecruiterModeToggle() {
  const { recruiterMode, setRecruiterMode } = useRecruiterMode();

  return (
    <button
      onClick={() => setRecruiterMode(!recruiterMode)}
      className={`fixed right-6 top-24 z-50 hidden items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium backdrop-blur-xl transition md:flex ${
        recruiterMode
          ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
          : "border-white/10 bg-white/10 text-slate-300"
      }`}
    >
      <Briefcase size={16} />
      Recruiter Mode
    </button>
  );
}