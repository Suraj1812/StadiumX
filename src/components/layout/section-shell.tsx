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
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.26em] text-[#5CFF8F]">
            <span className="h-px w-10 bg-[#5CFF8F]" />
            {eyebrow}
          </div>
          <h2 className="font-display text-balance text-5xl uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
