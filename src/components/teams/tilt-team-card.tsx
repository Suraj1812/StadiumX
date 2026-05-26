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
        "group relative min-h-[24rem] overflow-hidden rounded-md border bg-white p-5 text-left shadow-[0_20px_60px_rgba(16,33,23,.08)] transition duration-300",
        active ? "border-[#0B5A3F]/45 shadow-[0_22px_70px_rgba(11,90,63,.16)]" : "border-[#102117]/10 hover:border-[#0B5A3F]/30",
      )}
      aria-pressed={active}
    >
      <div
        className="absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 18% 18%, ${team.accent}28, transparent 30%), linear-gradient(145deg, ${team.primary}18, #ffffff 62%)`,
        }}
      />
      <div className="noise-overlay" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <TeamLogo logo={team.logo} primary={team.primary} accent={team.accent} className="h-20 w-20" />
          <Badge className="border-[#102117]/10 bg-white text-[#102117]/75 shadow-sm">{team.record}</Badge>
        </div>
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#102117]/52">{team.city}</p>
          <h3 className="font-display text-5xl uppercase leading-none text-[#102117]">{team.name}</h3>
          <p className="mt-4 text-sm leading-6 text-[#526158]">{team.aura}</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-1.5">
              {team.form.map((result, index) => (
                <span
                  key={`${team.id}-${index}`}
                  className={cn(
                    "grid h-7 w-7 place-items-center rounded-sm text-xs font-black",
                    result === "W" ? "bg-[#0B5A3F] text-white" : "bg-[#FF3B3B] text-white",
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
