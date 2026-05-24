import {
  MessageSquare,
  FolderKanban,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Clarify goals, details, deadlines, and expected output before execution.",
  },
  {
    icon: FolderKanban,
    title: "Organization",
    description:
      "Prepare files, references, schedules, records, and working materials.",
  },
  {
    icon: ClipboardCheck,
    title: "Execution",
    description:
      "Handle documentation, coordination, tracking, data entry, or digital support tasks.",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description:
      "Submit clean, structured, and review-ready outputs with clear updates.",
  },
];

export default function Workflow() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Workflow"
        title="Structured support from coordination to delivery."
        description="A practical process for keeping tasks clear, organized, and easier to manage."
      />

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-md transition hover:-translate-y-1 hover:border-[var(--accent)] md:backdrop-blur-xl"
            >
              <div
                className="mx-auto grid h-16 w-16 place-items-center rounded-2xl"
                style={{
                  backgroundColor: "var(--accent-soft)",
                }}
              >
                <Icon
                  size={28}
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <div className="absolute right-[-1.5rem] top-1/2 hidden h-[2px] w-12 bg-white/10 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}