import SectionHeader from "../components/SectionHeader";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Skills"
        title="Administrative, digital, event, and creative support capabilities."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 font-medium text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.075]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}