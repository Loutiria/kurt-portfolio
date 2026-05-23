import { motion } from "framer-motion";

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {label}
      </p>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}