"use client";

import { motion } from "framer-motion";
import { Radar, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar as RadarShape,
  RadarChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { inningsData, momentumData } from "@/data/cricket";
import { useMounted } from "@/hooks/use-mounted";
import { WagonWheel } from "./wagon-wheel";

const chartStyle = {
  background: "#07110e",
  border: "1px solid rgba(92,255,143,.22)",
  borderRadius: 6,
  color: "#fff",
};

export function AnalyticsSection() {
  const mounted = useMounted();

  return (
    <SectionShell
      id="analytics"
      eyebrow="Match Analytics"
      title="Data With Stadium Heat"
      intro="Charts stay legible and broadcast-ready while the surrounding visuals keep the pressure and movement of a live chase."
      className="bg-[#050505]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="grid gap-6">
          <Reveal>
            <div className="broadcast-frame rounded-md p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">
                    Projection
                  </p>
                  <h3 className="font-display text-4xl uppercase text-white">Run Acceleration</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-[#E6B325]" />
              </div>
              <div className="h-72">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={inningsData}>
                      <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                      <XAxis dataKey="over" stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} width={28} />
                      <ChartTooltip contentStyle={chartStyle} />
                      <Line
                        type="monotone"
                        dataKey="rr"
                        stroke="#E6B325"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#050505", stroke: "#E6B325", strokeWidth: 2 }}
                        activeDot={{ r: 7, fill: "#E6B325" }}
                        isAnimationActive
                      />
                      <Line
                        type="monotone"
                        dataKey="wickets"
                        stroke="#FF3B3B"
                        strokeWidth={2}
                        dot={false}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full rounded-md bg-white/[0.035]" />
                )}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="broadcast-frame rounded-md p-5 sm:p-6">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">
                  Strike zones
                </p>
                <div className="h-72">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={momentumData}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="phase" stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
                        <YAxis stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} width={28} />
                        <ChartTooltip contentStyle={chartStyle} />
                        <Bar dataKey="batting" fill="#5CFF8F" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="bowling" fill="#E6B325" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full rounded-md bg-white/[0.035]" />
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="broadcast-frame rounded-md p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Radar className="h-5 w-5 text-[#FF3B3B]" />
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">
                    Momentum meter
                  </p>
                </div>
                <div className="h-72">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={momentumData}>
                        <PolarGrid stroke="rgba(255,255,255,0.14)" />
                        <PolarAngleAxis dataKey="phase" stroke="rgba(255,255,255,0.55)" tick={{ fontSize: 11 }} />
                        <ChartTooltip contentStyle={chartStyle} />
                        <RadarShape
                          name="Batting"
                          dataKey="batting"
                          stroke="#5CFF8F"
                          fill="#5CFF8F"
                          fillOpacity={0.22}
                        />
                        <RadarShape
                          name="Fielding"
                          dataKey="fielding"
                          stroke="#FF3B3B"
                          fill="#FF3B3B"
                          fillOpacity={0.12}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full rounded-md bg-white/[0.035]" />
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.16}>
          <div className="grid gap-6">
            <WagonWheel />
            <div className="rounded-md border border-white/12 bg-white/[0.035] p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E6B325]">
                Live model read
              </p>
              <motion.p
                className="mt-3 font-score text-4xl leading-none text-white"
                animate={{ opacity: [0.7, 1, 0.78] }}
                transition={{ duration: 1.7, repeat: Infinity }}
              >
                Attack the fifth-stump pace-off ball. Midwicket is leaking.
              </motion.p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
