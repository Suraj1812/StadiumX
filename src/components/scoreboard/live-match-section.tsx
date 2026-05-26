"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Radio, Zap } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { Progress } from "@/components/ui/progress";
import { inningsData, overByOver, teams } from "@/data/cricket";
import { useCountUp } from "@/hooks/use-count-up";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { TeamLogo } from "./team-logo";

function StatPulse({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  const animated = useCountUp(value, 1100, value * 0.6);

  return (
    <div className="rounded-md border border-[#102117]/10 bg-white p-4 shadow-sm">
      <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#102117]/50">{label}</p>
      <p className="scoreboard-text mt-2 text-4xl text-[#102117]">
        {value % 1 === 0 ? Math.round(animated) : animated.toFixed(1)}
        {suffix}
      </p>
    </div>
  );
}

export function LiveMatchSection() {
  const batting = teams[2];
  const bowling = teams[0];
  const win = useCountUp(54, 1200, 36);
  const mounted = useMounted();

  return (
    <SectionShell
      id="live-match"
      eyebrow="Live Match Feed"
      title="Scoreboard With Teeth"
      intro="Every number behaves like broadcast graphics: fast, loud, legible, and alive under stadium pressure."
      className="bg-[#F7F9F2]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
        <Reveal>
          <div className="broadcast-frame relative overflow-hidden rounded-md p-5 sm:p-7 lg:p-8">
            <div className="noise-overlay" />
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <TeamLogo logo={batting.logo} primary={batting.primary} accent={batting.accent} />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0B5A3F]">
                      Batting
                    </p>
                    <h3 className="font-display text-4xl uppercase text-[#102117] sm:text-5xl">
                      {batting.shortName}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:text-right">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FF3B3B]">
                      Bowling
                    </p>
                    <h3 className="font-display text-4xl uppercase text-[#102117] sm:text-5xl">
                      {bowling.shortName}
                    </h3>
                  </div>
                  <TeamLogo logo={bowling.logo} primary={bowling.primary} accent={bowling.accent} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-md border border-[#0B5A3F]/15 bg-[#F4FAF5] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#102117]/50">
                    Target
                  </p>
                  <p className="scoreboard-text mt-2 text-6xl text-[#0B5A3F] sm:text-7xl">202</p>
                </div>
                <div className="grid h-16 w-16 place-items-center justify-self-center rounded-full border border-[#102117]/10 bg-white font-score text-2xl text-[#102117]/70 shadow-sm">
                  VS
                </div>
                <div className="rounded-md border border-[#E6B325]/25 bg-[#FFF8DF] p-5 sm:text-right">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#102117]/50">
                    Current
                  </p>
                  <p className="scoreboard-text mt-2 text-6xl text-[#102117] sm:text-7xl">141/3</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                <StatPulse label="Run rate" value={11.8} />
                <StatPulse label="Req rate" value={10.25} />
                <StatPulse label="Win" value={54} suffix="%" />
                <StatPulse label="Dots left" value={19} />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#102117]/54">
                    <Activity className="h-4 w-4 text-[#0B5A3F]" />
                    Over by over
                  </p>
                  <p className="font-score text-2xl text-[#E6B325]">12.0 overs</p>
                </div>
                <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
                  {overByOver.map((over, index) => (
                    <motion.div
                      key={`${over}-${index}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.035 }}
                      className={cn(
                        "grid h-12 place-items-center rounded-md border font-score text-xl",
                        over.includes("W")
                          ? "border-[#FF3B3B]/45 bg-[#FF3B3B]/18 text-[#FF8D8D]"
                          : "border-[#102117]/10 bg-white text-[#102117]",
                      )}
                    >
                      {over}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <div className="broadcast-frame rounded-md p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0B5A3F]">
                    Worm
                  </p>
                  <h3 className="font-display text-4xl uppercase text-[#102117]">Run Rate Surge</h3>
                </div>
                <Gauge className="h-8 w-8 text-[#E6B325]" />
              </div>
              <div className="h-64">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={inningsData}>
                      <defs>
                        <linearGradient id="runs" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#5CFF8F" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#5CFF8F" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                      <XAxis dataKey="over" stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} width={28} />
                      <ChartTooltip
                        contentStyle={{
                          background: "#ffffff",
                          border: "1px solid rgba(16,33,23,.14)",
                          borderRadius: 6,
                          color: "#102117",
                        }}
                      />
                      <Area type="monotone" dataKey="runs" stroke="#5CFF8F" strokeWidth={3} fill="url(#runs)" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full rounded-md bg-[#102117]/[0.035]" />
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-md border border-[#E6B325]/24 bg-[#E6B325]/8 p-5 shadow-gold-glow">
              <div className="mb-4 flex items-center justify-between">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#E6B325]">
                  <Radio className="h-4 w-4" />
                  Win predictor
                </p>
                <p className="scoreboard-text text-4xl text-[#102117]">{Math.round(win)}%</p>
              </div>
              <Progress value={win} className="h-2 bg-[#102117]/10" />
              <p className="mt-4 text-sm leading-6 text-[#526158]">
                Meteor still hold the edge, but Volt have two left-hand hitters and a short leg-side
                boundary. The next eight balls can tilt the whole night.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-md border border-[#FF3B3B]/24 bg-[#FF3B3B]/8 p-5">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#FF8D8D]">
                <Zap className="h-4 w-4" />
                Last event
              </p>
              <p className="mt-3 font-score text-4xl uppercase text-[#102117]">
                Six over long-on. New ball requested.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
