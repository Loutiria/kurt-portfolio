import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (event) => {
      setVisible(true);
      cursorX.set(event.clientX - 10);
      cursorY.set(event.clientY - 10);
    };

    const leave = () => setVisible(false);

    const enterInteractive = () => setHovering(true);
    const leaveInteractive = () => setHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", enterInteractive);
      element.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", enterInteractive);
        element.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          scale: hovering ? 2.4 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-5 w-5 rounded-full border border-[var(--accent)] mix-blend-difference md:block"
      />

      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: hovering ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed left-[6px] top-[6px] z-[10001] hidden h-2 w-2 rounded-full bg-[var(--accent)] md:block"
      />
    </>
  );
}