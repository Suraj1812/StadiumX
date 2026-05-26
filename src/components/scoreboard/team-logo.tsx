import { cn } from "@/lib/utils";

type TeamLogoProps = {
  logo: string;
  primary: string;
  accent: string;
  className?: string;
};

export function TeamLogo({ logo, primary, accent, className }: TeamLogoProps) {
  return (
    <div
      className={cn(
        "relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-md border border-white/15 shadow-2xl sm:h-20 sm:w-20",
        className,
      )}
      style={{
        background: `linear-gradient(145deg, ${primary}, #050505 62%)`,
        boxShadow: `0 0 38px ${accent}33`,
      }}
    >
      <span
        className="absolute inset-x-2 top-2 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <span className="font-display text-4xl uppercase text-white sm:text-5xl">{logo}</span>
    </div>
  );
}
