import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import MotionSection from "../components/MotionSection";

import { experiences } from "../data/portfolioData";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Resume Timeline"
        title="Real roles connected to administration, coordination, and digital work."
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

        <div className="space-y-8 border-l border-white/10 pl-6 md:border-none md:pl-10">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  y: -2,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
              >
                <Card className="relative p-10">
                  <p
                    className="flex items-center gap-3 text-sm uppercase tracking-[0.22em]"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={18} />
                    {item.period}
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight md:text-[28px]">
                    {item.title}
                  </h3>

                  <ul className="mt-8 grid gap-4 md:grid-cols-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/25 px-6 py-5 text-sm leading-7 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-black/35"
                      >
                        <div
                          className="absolute left-0 top-0 h-full w-[3px]"
                          style={{
                            background:
                              "var(--accent-gradient)",
                          }}
                        />

                        <p className="relative z-10">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}