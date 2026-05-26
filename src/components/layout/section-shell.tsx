import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  intro?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-x relative py-20 sm:py-24 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-4xl sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#0B5A3F]">
            <span className="h-px w-10 bg-[#0B5A3F]" />
            {eyebrow}
          </div>
          <h2 className="font-display text-balance text-5xl uppercase leading-[0.9] text-[#102117] sm:text-7xl lg:text-8xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#526158] sm:text-lg">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
