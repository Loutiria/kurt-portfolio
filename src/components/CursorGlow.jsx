import { useEffect, useState } from "react";

function isTouchDevice() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) return;

    setEnabled(true);

    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(circle 240px at ${position.x}px ${position.y}px, var(--accent-soft), transparent 70%)`,
      }}
    />
  );
}