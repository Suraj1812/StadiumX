"use client";

import { LenisProvider } from "@/components/effects/lenis-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={160}>
      <LenisProvider>{children}</LenisProvider>
    </TooltipProvider>
  );
}
