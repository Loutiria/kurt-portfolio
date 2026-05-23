import { ExternalLink } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Projects"
        title="Work samples showing organization, documentation, design, and web execution."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <p
              className="text-sm uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              {project.role}
            </p>

            <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {project.outcome}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              Visit Project <ExternalLink size={16} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}