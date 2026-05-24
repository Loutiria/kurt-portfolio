import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";

import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Skills"
        title="Administrative, digital, event, and creative support capabilities."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.075]"
            onMouseEnter={(event) => {
              event.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </MotionSection>
  );
}