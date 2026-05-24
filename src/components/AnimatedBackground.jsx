import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="absolute bottom-0 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-700/20 blur-3xl" />

      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.22, 0.5, 0.22] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-40 hidden h-24 w-24 rounded-full border bg-white/5 blur-sm md:block"
        style={{ borderColor: "var(--accent)" }}
      />

      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        className="absolute left-0 top-0 hidden h-24 w-full bg-gradient-to-b from-transparent to-transparent md:block"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
    </div>
  );
}