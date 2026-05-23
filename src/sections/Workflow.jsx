import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { workflow } from "../data/portfolioData";

export default function Workflow() {
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Workflow Process"
        title="A simple operating process for cleaner execution."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {workflow.map((item) => (
          <Card key={item.step}>
            <p className="text-sm font-bold text-cyan-300">{item.step}</p>

            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}