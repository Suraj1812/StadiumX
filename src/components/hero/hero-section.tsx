"use client";

import gsap from "gsap";
import Image from "next/image";
import {
  CalendarDays,
  Radio,
  SignalHigh,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { TeamLogo } from "@/components/scoreboard/team-logo";
import { fixtures, teams } from "@/data/cricket";
import { useCountUp } from "@/hooks/use-count-up";
import { LiveTicker } from "./live-ticker";

function HeroScoreCard() {
  const runs = Math.round(useCountUp(141, 950, 118));
  const wickets = Math.round(useCountUp(3, 800, 2));
  const win = Math.round(useCountUp(54, 1000, 45));
  const batting = teams[2];
  const bowling = teams[0];

  return (
    <div className="overflow-hidden rounded-md border border-[#102117]/10 bg-white shadow-[0_26px_80px_rgba(16,33,23,.14)]">
      <div className="bg-[#102117] px-5 py-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7FE6A0]">
            Live match
          </p>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">
            12.0 overs
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <TeamLogo logo={batting.logo} primary={batting.primary} accent={batting.accent} className="h-14 w-14" />
            <p className="mt-3 font-score text-3xl leading-none text-[#102117]">{batting.shortName}</p>
          </div>
          <div className="rounded-full border border-[#102117]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#68766e]">
            vs
          </div>
          <div className="text-right">
            <TeamLogo logo={bowling.logo} primary={bowling.primary} accent={bowling.accent} className="ml-auto h-14 w-14" />
            <p className="mt-3 font-score text-3xl leading-none text-[#102117]">{bowling.shortName}</p>
          </div>
        </div>

        <div className="my-6 rounded-md bg-[#F4FAF5] p-5">
          <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#68766e]">
            Chasing 202
          </p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="font-score text-7xl leading-none text-[#102117]">
              {runs}/{wickets}
            </p>
            <p className="pb-2 text-right text-sm font-bold text-[#0B5A3F]">{win}% win</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            ["RR", "11.8"],
            ["Need", "61"],
            ["Balls", "48"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-[#102117]/10 p-3">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#68766e]">
                {label}
              </p>
              <p className="font-score text-3xl text-[#102117]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroFixture() {
  const fixture = fixtures[0];

  return (
    <div className="rounded-md border border-[#102117]/10 bg-white p-4 shadow-[0_18px_50px_rgba(16,33,23,.08)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F]">
          <CalendarDays className="h-4 w-4" />
          Next fixture
        </p>
        <span className="rounded-full bg-[#EDF8EE] px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#0B5A3F]">
          {fixture.tag}
        </span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <p className="font-score text-2xl leading-none text-[#102117]">{fixture.home}</p>
        <span className="rounded-full border border-[#102117]/10 px-2 py-1 text-[0.64rem] font-black text-[#68766e]">
          vs
        </span>
        <p className="text-right font-score text-2xl leading-none text-[#102117]">{fixture.away}</p>
      </div>
      <p className="mt-3 text-sm text-[#68766e]">
        {fixture.date} / {fixture.time} / {fixture.venue}
      </p>
    </div>
  );
}

export function HeroSection() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scope.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-kicker", { opacity: 0, y: 14, duration: 0.55 })
        .from(".hero-title", { opacity: 0, y: 22, duration: 0.75 }, "-=0.25")
        .from(".hero-copy", { opacity: 0, y: 14, duration: 0.6 }, "-=0.35")
        .from(".hero-panel", { opacity: 0, y: 18, stagger: 0.08, duration: 0.55 }, "-=0.25");
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <section ref={scope} className="relative overflow-hidden bg-[#F7F9F2] pt-20">
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-[#071421]" />
      <div className="absolute inset-x-0 top-0 h-[46rem]">
        <Image
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=2200&q=90"
          alt="Cricket match on a green field"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-gradient-to-r from-[#071421] via-[#071421]/78 to-[#071421]/28" />
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-gradient-to-t from-[#071421]/55 via-transparent to-[#071421]/20" />

      <div className="section-x relative z-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid min-h-[40rem] items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_29rem] lg:py-16">
            <div className="max-w-3xl">
              <div className="hero-kicker mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#7FE6A0] shadow-sm backdrop-blur-sm">
                <Radio className="h-3.5 w-3.5" />
                Cricket club and analytics platform
              </div>
              <h1 className="hero-title max-w-3xl font-display text-[clamp(3.4rem,8vw,7.4rem)] uppercase leading-[0.86] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,.45)]">
                We look up, never give up.
              </h1>
              <p className="hero-copy mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-xl sm:leading-8">
                Follow the fixture list, live match state, team table, player form, reports,
                and video highlights from one clean cricket hub.
              </p>

              <div className="hero-panel mt-7 flex flex-col gap-3 sm:flex-row">
                <MagneticButton onClick={() => document.getElementById("live-match")?.scrollIntoView()}>
                  <SignalHigh className="h-4 w-4" />
                  Open match center
                </MagneticButton>
                <MagneticButton
                  variant="ghost"
                  className="border-white/30 bg-white text-[#102117]"
                  onClick={() => document.getElementById("season-hub")?.scrollIntoView()}
                >
                  View fixtures
                </MagneticButton>
              </div>

              <div className="hero-panel mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.16em] text-white/76">
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-sm">Live scores</span>
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-sm">Fixtures</span>
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-sm">Real videos</span>
              </div>
            </div>

            <div className="hero-panel space-y-4">
              <HeroScoreCard />
              <HeroFixture />
            </div>
          </div>

          <div className="relative z-10 -mx-4 sm:-mx-6 lg:-mx-10 2xl:-mx-16">
            <LiveTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
