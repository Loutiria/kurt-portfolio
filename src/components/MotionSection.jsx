import { motion, useReducedMotion } from "framer-motion";

export default function MotionSection({ children, className = "", id }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              filter: "blur(6px)",
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}