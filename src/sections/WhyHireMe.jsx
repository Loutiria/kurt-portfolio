import { CheckCircle } from "lucide-react";

import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const reasons = [
  "Organized with documentation, records, and file management.",
  "Able to support administrative, event, creative, and web-related tasks.",
  "Comfortable with remote tools, digital workflows, and structured communication.",
  "Detail-oriented when handling financial records, schedules, and reports.",
  "Adaptable, trainable, and focused on reliable task execution.",
  "Honest positioning without exaggerated claims.",
];

export default function WhyHireMe() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Why Hire Me"
        title="Practical support with structure, reliability, and adaptability."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason}>
            <CheckCircle className="text-emerald-300" />

            <p className="mt-4 leading-7 text-slate-300">
              {reason}
            </p>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}