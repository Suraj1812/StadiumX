"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 220, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.button
      {...props}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-md border px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5A3F]",
        variant === "primary" &&
          "border-[#0B5A3F] bg-[#0B5A3F] text-white shadow-[0_16px_34px_rgba(11,90,63,.18)] hover:bg-[#063b2a]",
        variant === "ghost" &&
          "border-[#102117]/15 bg-white text-[#102117] shadow-sm hover:border-[#0B5A3F]/45 hover:text-[#0B5A3F]",
        variant === "danger" &&
          "border-[#FF3B3B]/50 bg-[#FF3B3B] text-white shadow-[0_14px_34px_rgba(255,59,59,.16)] hover:bg-white hover:text-[#102117]",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
