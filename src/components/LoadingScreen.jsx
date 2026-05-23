import { motion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <motion.div className="fixed inset-0 z-[999] grid place-items-center bg-[#070b12]">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative grid h-28 w-28 place-items-center rounded-3xl border border-cyan-300/30 bg-cyan-300/10 shadow-2xl shadow-cyan-500/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute inset-[-8px] rounded-[2rem] border border-cyan-300/20 border-t-cyan-300"
          />

          <span className="text-3xl font-black tracking-tight text-cyan-100">
            KP
          </span>
        </motion.div>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Preparing Portfolio
          </p>

          <div className="mt-4 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 rounded-full bg-cyan-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}