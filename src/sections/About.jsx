import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="About"
        title="Reliable support with administrative discipline and creative flexibility."
        description="Detail-oriented and adaptable college student with experience in administrative support, digital organization, event planning, coordination, facilitation, web development, and creative digital projects."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {[
          "Organized in records, files, schedules, and documentation.",
          "Adaptable across administrative, creative, event, and web-related tasks.",
          "Focused on accuracy, accountability, workflow clarity, and professional output.",
        ].map((text) => (
          <Card key={text}>
            <p className="leading-7 text-slate-300">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}