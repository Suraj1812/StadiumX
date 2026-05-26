"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TeamLogo } from "@/components/scoreboard/team-logo";
import { Badge } from "@/components/ui/badge";
import type { Team } from "@/data/cricket";
import { cn } from "@/lib/utils";

type TiltTeamCardProps = {
  team: Team;
  active: boolean;
  onSelect: () => void;
};

export function TiltTeamCard({ team, active, onSelect }: TiltTeamCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 22 });

  return (
    <motion.button
      type="button"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onSelect}
      className={cn(
        "group relative min-h-[24rem] overflow-hidden rounded-md border p-5 text-left transition duration-300",
        active ? "border-[#5CFF8F]/65 shadow-neon-ring" : "border-white/10 hover:border-white/24",
      )}
      aria-pressed={active}
    >
      <div
        className="absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 18% 18%, ${team.accent}44, transparent 28%), linear-gradient(145deg, ${team.primary}55, #050505 58%)`,
        }}
      />
      <div className="noise-overlay" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <TeamLogo logo={team.logo} primary={team.primary} accent={team.accent} className="h-20 w-20" />
          <Badge className="border-white/15 bg-black/40 text-white/75">{team.record}</Badge>
        </div>
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-white/52">{team.city}</p>
          <h3 className="font-display text-5xl uppercase leading-none text-white">{team.name}</h3>
          <p className="mt-4 text-sm leading-6 text-white/64">{team.aura}</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-1.5">
              {team.form.map((result, index) => (
                <span
                  key={`${team.id}-${index}`}
                  className={cn(
                    "grid h-7 w-7 place-items-center rounded-sm text-xs font-black",
                    result === "W" ? "bg-[#5CFF8F] text-[#02140d]" : "bg-[#FF3B3B] text-white",
                  )}
                >
                  {result}
                </span>
              ))}
            </div>
            <ChevronRight className="h-5 w-5 text-[#E6B325] transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
