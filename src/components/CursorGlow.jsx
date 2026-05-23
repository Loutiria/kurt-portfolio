import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed z-0 hidden h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl md:block"
    />
  );
}   