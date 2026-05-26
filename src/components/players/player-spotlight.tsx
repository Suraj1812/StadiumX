"use client";

import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { players } from "@/data/cricket";
import { PlayerCard } from "./player-card";

export function PlayerSpotlight() {
  return (
    <SectionShell
      id="players"
      eyebrow="Player Spotlight"
      title="Faces Under Pressure"
      intro="Portrait-led match theatre with parallax, light sweeps, and numbers that feel like they belong on a premium player package."
      className="bg-[#050505]"
    >
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {players.map((player, index) => (
            <PlayerCard key={player.name} player={player} index={index} />
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
