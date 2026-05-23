import {
  MessageSquare,
  FolderKanban,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    icon: MessageSquare,
    title: "Communication",
  },
  {
    icon: FolderKanban,
    title: "Organization",
  },
  {
    icon: ClipboardCheck,
    title: "Execution",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
  },
];

export default function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Workflow"
        title="Structured support from coordination to delivery."
      />

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl"
            >
              <div
                className="mx-auto grid h-16 w-16 place-items-center rounded-2xl"
                style={{
                  backgroundColor:
                    "var(--accent-soft)",
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

              {index !== steps.length - 1 && (
                <div className="absolute right-[-1.5rem] top-1/2 hidden h-[2px] w-12 bg-white/10 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}