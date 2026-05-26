"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { Separator } from "@/components/ui/separator";
import { teams } from "@/data/cricket";
import { TiltTeamCard } from "./tilt-team-card";

export function TeamShowcase() {
  const [activeId, setActiveId] = useState(teams[0].id);
  const activeTeam = teams.find((team) => team.id === activeId) ?? teams[0];
  const metrics = [
    ["Powerplay", activeTeam.powerPlay],
    ["Death overs", activeTeam.deathOvers],
    ["Fielding", activeTeam.fielding],
  ] as const;

  return (
    <SectionShell
      id="teams"
      eyebrow="Franchise Energy"
      title="Color, Noise, Rivalry"
      intro="The cards behave like pitch-side broadcast plates, with team identity baked into the light instead of pasted on afterward."
      className="overflow-hidden bg-[linear-gradient(180deg,#050505,#071B2A_55%,#050505)]"
    >
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#5CFF8F]/40 to-transparent" />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="grid gap-4 sm:grid-cols-2">
          {teams.map((team, index) => (
            <Reveal key={team.id} delay={index * 0.04}>
              <TiltTeamCard team={team} active={team.id === activeId} onSelect={() => setActiveId(team.id)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <aside className="sticky top-8 rounded-md border border-white/12 bg-black/45 p-5 shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-[#E6B325]/15 text-[#E6B325]">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">
                  Spotlight
                </p>
                <h3 className="font-display text-3xl uppercase text-white">{activeTeam.shortName} profile</h3>
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="mt-6 space-y-5">
              {metrics.map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-white/56">
                      {label}
                    </span>
                    <span className="font-score text-2xl text-white">{value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={`${activeTeam.id}-${label}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${activeTeam.accent}, ${activeTeam.primary})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm leading-6 text-white/66">
                {activeTeam.name} are most dangerous when the camera cuts to the dugout and
                everyone is standing. Their identity is pressure, not patience.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </SectionShell>
  );
}
