import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

import { services } from "../data/portfolioData";

export default function Services() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="What I Can Help With"
        title="Practical support for busy teams, projects, and operations."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title}>
              <Icon
                className="transition duration-300 group-hover:rotate-3 group-hover:scale-110"
                style={{
                  color: "var(--accent)",
                }}
              />

              <h3 className="mt-5 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </MotionSection>
  );
}