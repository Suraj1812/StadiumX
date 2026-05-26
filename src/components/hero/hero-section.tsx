"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown, Radio, SignalHigh } from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { StadiumScene } from "@/components/stadium/stadium-scene";
import { Badge } from "@/components/ui/badge";
import { broadcastStats } from "@/data/cricket";
import { useCountUp } from "@/hooks/use-count-up";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { LiveTicker } from "./live-ticker";

function AnimatedScore() {
  const runs = Math.round(useCountUp(141, 1400, 88));
  const wickets = Math.round(useCountUp(3, 900, 1));
  const balls = Math.round(useCountUp(72, 1400, 42));

  return (
    <div className="broadcast-frame clip-score w-full max-w-xl px-5 py-4 sm:px-7">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0B5A3F]">
            Live chase
          </p>
          <div className="scoreboard-text mt-1 text-5xl leading-none text-[#102117] sm:text-7xl">
            {runs}/{wickets}
          </div>
        </div>
        <div className="text-right">
          <p className="font-score text-3xl text-[#E6B325]">{(balls / 6).toFixed(1)}</p>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#102117]/54">Overs</p>
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  const animated = useCountUp(value, 1200, value * 0.5);

  return (
    <div className="broadcast-frame rounded-md p-4">
      <p className="text-[0.64rem] font-black uppercase tracking-[0.2em] text-[#102117]/50">
        {label}
      </p>
      <p className="scoreboard-text mt-2 text-4xl text-[#102117]">
        {Math.round(animated)}
        {suffix}
      </p>
    </div>
  );
}

export function HeroSection() {
  const scope = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    if (!scope.current) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      timeline
        .from(".hero-kicker", { opacity: 0, y: 24, duration: 0.8 })
        .from(".hero-title span", { yPercent: 120, opacity: 0, stagger: 0.08, duration: 1.05 }, "-=0.45")
        .from(".hero-copy", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
        .from(".hero-panel", { opacity: 0, scale: 0.95, y: 24, stagger: 0.08, duration: 0.7 }, "-=0.35");
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="relative min-h-[94vh] overflow-hidden bg-[#F7F9F2] section-x"
      style={{
        backgroundImage: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 72}%, rgb(92 255 143 / 0.16), transparent 24rem)`,
      }}
    >
      <div className="stadium-grid absolute inset-x-0 bottom-0 z-[1] h-2/3 opacity-55" />
      <div className="noise-overlay z-[2]" />
      <div className="pointer-events-none absolute -left-28 top-20 z-[2] h-[32rem] w-80 rotate-12 animate-spotlight bg-[#5CFF8F]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-16 z-[2] h-[30rem] w-80 -rotate-12 animate-spotlight bg-[#E6B325]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-[#F7F9F2] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[94vh] w-full max-w-7xl flex-col justify-between pb-8 pt-24 sm:pt-28">
        <div className="grid items-end gap-10 pb-10 pt-16 lg:grid-cols-[minmax(0,1fr)_25rem] lg:pb-16 lg:pt-24">
          <div>
            <Badge className="hero-kicker mb-5 border-[#0B5A3F]/20 bg-white px-3 py-1 text-[#0B5A3F] shadow-sm">
              <Radio className="mr-2 h-3.5 w-3.5" />
              Live from a floodlit final
            </Badge>
            <h1 className="hero-title max-w-5xl overflow-hidden font-display text-[clamp(4.2rem,16vw,12.5rem)] uppercase leading-[0.78] text-[#102117]">
              <span className="block">Cricket</span>
              <span className="block text-[#0B5A3F]">In Motion</span>
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-base leading-7 text-[#526158] sm:text-xl sm:leading-8">
              A polished cricket command center with live data, team stories, match
              analytics, and premium sports energy presented in a calm, usable interface.
            </p>
            <div className="hero-panel mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton onClick={() => document.getElementById("live-match")?.scrollIntoView()}>
                <SignalHigh className="h-4 w-4" />
                Enter match
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                onClick={() => document.getElementById("fan-experience")?.scrollIntoView()}
              >
                Raise the noise
              </MagneticButton>
            </div>
          </div>

          <motion.div
            className="hero-panel space-y-4"
            initial={false}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="broadcast-frame relative h-60 overflow-hidden rounded-md sm:h-72">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-[#102117]/10 bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F] shadow-sm">
                3D match ball
              </div>
              <StadiumScene />
            </div>
            <AnimatedScore />
            <div className="grid grid-cols-2 gap-3">
              {broadcastStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    index === 0 ? "col-span-2" : "",
                  )}
                >
                  <HeroStat label={stat.label} value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 -mx-4 sm:-mx-6 lg:-mx-10 2xl:-mx-16">
          <LiveTicker />
        </div>

        <a
          href="#live-match"
          className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#102117]/50 lg:flex"
        >
          Scroll
          <ChevronDown className="h-5 w-5 animate-bounce text-[#0B5A3F]" />
        </a>
      </div>
    </section>
  );
}
