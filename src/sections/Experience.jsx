import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Resume Timeline"
        title="Real roles connected to administration, coordination, and digital work."
      />

      <div className="relative space-y-6 border-l border-white/10 pl-6 md:pl-10">
        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <div className="absolute -left-[13px] mt-1 grid h-6 w-6 place-items-center rounded-full border border-cyan-300/50 bg-[#070b12]">
                <div className="h-2 w-2 rounded-full bg-cyan-300" />
              </div>

              <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-300">
                <Icon size={18} /> {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-300"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}