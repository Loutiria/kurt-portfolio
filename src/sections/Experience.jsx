import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { experiences } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Resume Timeline"
        title="Real roles connected to administration, coordination, and digital work."
      />

      <div className="relative space-y-6 border-l border-white/10 pl-6 md:pl-10">
        {experiences.map((item) => {
          const Icon = item.icon;

          return (
    <motion.div
        key={item.title}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
    >
        <Card>
              <div
                className="absolute -left-[13px] mt-1 grid h-6 w-6 place-items-center rounded-full border bg-[#070b12]"
                style={{ borderColor: "var(--accent)" }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </div>

              <p
                className="flex items-center gap-3 text-sm uppercase tracking-[0.22em]"
                style={{ color: "var(--accent)" }}
              >
                <Icon size={18} /> {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-300"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
        </Card>
    </motion.div>
          );
        })}
      </div>
    </section>
  );
}