"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = ComponentPropsWithoutRef<"button"> & {
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
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-md border px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CFF8F]",
        variant === "primary" &&
          "border-[#5CFF8F]/50 bg-[#5CFF8F] text-[#04130d] shadow-neon-ring hover:bg-white",
        variant === "ghost" &&
          "border-white/15 bg-white/[0.04] text-white hover:border-[#E6B325]/70 hover:text-[#E6B325]",
        variant === "danger" &&
          "border-[#FF3B3B]/50 bg-[#FF3B3B] text-white shadow-led-red hover:bg-white hover:text-[#050505]",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
