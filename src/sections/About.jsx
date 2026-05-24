import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const items = [
  {
    title: "Administrative Support",
    description:
      "Structured documentation, scheduling support, organized records, and operational coordination for academic and digital workflows.",
  },
  {
    title: "Creative & Digital Work",
    description:
      "Supports web projects, visual content creation, digital assets, and organized online project systems.",
  },
  {
    title: "Coordination & Facilitation",
    description:
      "Experienced in planning, preparing, and coordinating student organization activities and collaborative tasks.",
  },
];

export default function About() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="About"
        title="Organized support across administration, documentation, and digital workflows."
        description="Focused on operational support, structured organization, and practical digital assistance for modern workflows."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-2xl font-bold">{item.title}</h3>

            <p className="mt-5 leading-8 text-slate-300">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}