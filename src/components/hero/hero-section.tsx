"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown, Radio, SignalHigh, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ParticleField } from "@/components/effects/particle-field";
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
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">
            Live chase
          </p>
          <div className="scoreboard-text mt-1 text-5xl leading-none text-white sm:text-7xl">
            {runs}/{wickets}
          </div>
        </div>
        <div className="text-right">
          <p className="font-score text-3xl text-[#E6B325]">{(balls / 6).toFixed(1)}</p>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/54">Overs</p>
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  const animated = useCountUp(value, 1200, value * 0.5);

  return (
    <div className="broadcast-frame rounded-md p-4">
      <p className="text-[0.64rem] font-black uppercase tracking-[0.2em] text-white/48">
        {label}
      </p>
      <p className="scoreboard-text mt-2 text-4xl text-white">
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
      className="relative min-h-screen overflow-hidden bg-[#050505] section-x"
      style={{
        backgroundImage: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 72}%, rgb(92 255 143 / 0.18), transparent 23rem)`,
      }}
    >
      <StadiumScene />
      <ParticleField className="absolute inset-0 z-[1] opacity-70" density={54} />
      <div className="stadium-grid absolute inset-x-0 bottom-0 z-[1] h-2/3 opacity-80" />
      <div className="noise-overlay z-[2]" />
      <div className="pointer-events-none absolute -left-28 top-20 z-[2] h-[32rem] w-80 rotate-12 animate-spotlight bg-[#5CFF8F]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-16 z-[2] h-[30rem] w-80 -rotate-12 animate-spotlight bg-[#E6B325]/16 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between pb-8 pt-6 sm:pt-8">
        <nav className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-[#5CFF8F]/45 bg-[#5CFF8F]/10 shadow-neon-ring">
              <Trophy className="h-5 w-5 text-[#E6B325]" />
            </span>
            <span className="font-display text-2xl uppercase text-white">StadiumX</span>
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/70 backdrop-blur-md md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF3B3B]" />
            Broadcast mode
          </div>
        </nav>

        <div className="grid items-end gap-10 pb-10 pt-24 lg:grid-cols-[minmax(0,1fr)_25rem] lg:pb-16 lg:pt-28">
          <div>
            <Badge className="hero-kicker mb-5 border-[#5CFF8F]/40 bg-[#5CFF8F]/10 px-3 py-1 text-[#5CFF8F]">
              <Radio className="mr-2 h-3.5 w-3.5" />
              Live from a floodlit final
            </Badge>
            <h1 className="hero-title max-w-5xl overflow-hidden font-display text-[clamp(4.2rem,16vw,12.5rem)] uppercase leading-[0.78] text-white">
              <span className="block">Cricket</span>
              <span className="block text-[#5CFF8F]">After Dark</span>
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-xl sm:leading-8">
              A cinematic sports-broadcast playground where live data, crowd pulse, floodlights,
              and 3D match energy collide like the last over of a night final.
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
          className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white/50 lg:flex"
        >
          Scroll
          <ChevronDown className="h-5 w-5 animate-bounce text-[#5CFF8F]" />
        </a>
      </div>
    </section>
  );
}
