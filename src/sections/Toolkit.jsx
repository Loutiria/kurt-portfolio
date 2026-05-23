import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const toolkit = {
  Operations: [
    "Google Workspace",
    "Microsoft Office",
    "File Management",
    "Documentation",
  ],
  Creative: ["Adobe Photoshop", "Canva"],
  Development: ["React", "Vite", "Tailwind CSS"],
  Coordination: [
    "Event Planning",
    "Event Coordination",
    "Facilitation",
  ],
};

export default function Toolkit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Toolkit"
        title="Software, systems, and workflow tools."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(toolkit).map(([group, items]) => (
          <Card
            key={group}
            className="transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]"
          >
            <h3
              className="text-xl font-black"
              style={{ color: "var(--accent)" }}
            >
              {group}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}