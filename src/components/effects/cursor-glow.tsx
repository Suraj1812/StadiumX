"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(circle, rgb(11 90 63 / 0.10), rgb(230 179 37 / 0.08) 38%, transparent 70%)`;

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-screen blur-3xl lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        background: glow,
      }}
    />
  );
}
