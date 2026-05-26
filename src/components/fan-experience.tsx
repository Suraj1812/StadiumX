"use client";

import { motion } from "framer-motion";
import { MousePointer2, Sparkles } from "lucide-react";
import { useState } from "react";
import { SoundButton } from "@/components/effects/sound-button";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { predictionCards } from "@/data/cricket";
import { cn } from "@/lib/utils";

export function FanExperience() {
  const [selected, setSelected] = useState(0);

  return (
    <SectionShell
      id="fan-experience"
      eyebrow="Fan Experience"
      title="Make The Stands Move"
      intro="Interactive fan moments with generated crowd ambience, prediction pressure, and tactile broadcast controls."
      className="bg-[#F7F9F2]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <div className="broadcast-frame relative overflow-hidden rounded-md p-6 sm:p-8">
            <div className="noise-overlay" />
            <div className="relative z-10">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#0B5A3F]">
                <MousePointer2 className="h-4 w-4" />
                Interactive sound check
              </p>
              <h3 className="font-display text-5xl uppercase leading-none text-[#102117] sm:text-6xl">
                The crowd is a control surface.
              </h3>
              <p className="mt-5 text-base leading-7 text-[#526158]">
                Tap in and the ambience rolls under the page. It is intentionally subtle:
                enough to feel the stand, not enough to fight the interface.
              </p>
              <div className="mt-7">
                <SoundButton />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 md:grid-cols-3">
            {predictionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.button
                  key={card.label}
                  type="button"
                  onClick={() => setSelected(index)}
                  whileHover={{ y: -8 }}
                  className={cn(
                    "relative min-h-72 overflow-hidden rounded-md border p-5 text-left transition",
                    selected === index ? "border-[#E6B325]/70 shadow-gold-glow" : "border-[#102117]/10",
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(92,255,143,.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.95),rgba(247,249,242,.78))]" />
                  <div className="noise-overlay" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-md border border-[#102117]/10 bg-white text-[#0B5A3F] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-score text-7xl leading-none text-[#102117]">{card.chance}%</p>
                      <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-[#102117]/54">
                        {card.label}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          <div className="mt-4 rounded-md border border-[#0B5A3F]/15 bg-[#EDF8EE] p-5">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#0B5A3F]">
              <Sparkles className="h-4 w-4" />
              Fan model
            </p>
            <p className="mt-3 text-sm leading-6 text-[#526158]">
              Prediction cards are intentionally simple and punchy, like a second-screen
              overlay that belongs beside a live stream instead of a spreadsheet.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
