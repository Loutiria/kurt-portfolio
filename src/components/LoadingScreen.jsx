import { motion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] grid place-items-center bg-[#070b12]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative grid h-28 w-28 place-items-center rounded-3xl border shadow-2xl"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent-soft)",
            boxShadow: "0 0 40px var(--accent-soft)",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute inset-[-8px] rounded-[2rem] border border-white/10"
            style={{ borderTopColor: "var(--accent)" }}
          />

          <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>
            KP
          </span>
        </motion.div>

        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--accent)" }}
          >
            Preparing Portfolio
          </p>

          <div className="mt-4 h-1 w-60 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}