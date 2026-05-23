import SectionHeader from "../components/SectionHeader";
import { tools } from "../data/portfolioData";

export default function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Tools & Platforms"
        title="Software familiarity for administrative, creative, and remote support tasks."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`group flex items-center gap-4 rounded-2xl border bg-black/20 px-5 py-4 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:bg-white/[0.075] ${tool.color}`}
          >
            <div
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border text-xs font-black tracking-wide transition group-hover:scale-110 ${tool.color}`}
            >
              {tool.logo}
            </div>

            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}