import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.35,
            ease: "easeOut",
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070b12]"
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                    scale: 0.98,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -10,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              ease: "easeOut",
            }}
            className="flex w-[320px] flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-9 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div
              className="grid h-16 w-16 place-items-center rounded-2xl border text-2xl font-black"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-soft)",
              }}
            >
              KP
            </div>

            <p
              className="mt-6 text-xs font-semibold uppercase tracking-[0.35em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Loading
            </p>

            <p className="mt-3 text-center text-sm leading-6 text-slate-400">
              Preparing a cleaner portfolio experience.
            </p>

            <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: "120%",
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 1.05,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full"
                style={{
                  background: "var(--accent-gradient)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}