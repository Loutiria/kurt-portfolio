import { ClipboardCheck, MessageSquare, FolderKanban, CheckCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const principles = [
  {
    icon: FolderKanban,
    title: "Documentation-first mindset",
    text: "I prioritize organized records, clear files, and traceable information so work stays easy to review.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    text: "I value direct updates, complete details, and professional communication for smoother coordination.",
  },
  {
    icon: ClipboardCheck,
    title: "Consistent execution",
    text: "I focus on accuracy, task completion, and structured output rather than unnecessary complexity.",
  },
  {
    icon: CheckCircle,
    title: "Adaptable support",
    text: "I can assist with administrative, event, creative, and web-related workflows depending on team needs.",
  },
];

export default function WorkPhilosophy() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Work Philosophy"
        title="Structured support built on clarity, organization, and follow-through."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <Icon style={{ color: "var(--accent)" }} />
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}