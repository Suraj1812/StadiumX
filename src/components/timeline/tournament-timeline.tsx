"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { milestones } from "@/data/cricket";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function TournamentTimeline() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scope.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(".timeline-spine", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 72%",
          end: "bottom 34%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".timeline-moment").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 42,
          rotateX: 10,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
          },
        });
      });
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <SectionShell
      id="timeline"
      eyebrow="Tournament Timeline"
      title="The Years Got Louder"
      intro="A scroll-driven trophy reel: milestones, broadcast shifts, and the moments that turned cricket into night-time theatre."
      className="overflow-hidden bg-[linear-gradient(180deg,#F7F9F2,#E7F2E6_45%,#F7F9F2)]"
    >
      <div ref={scope} className="timeline-wrap relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-[#102117]/10 md:block" />
        <div className="timeline-spine absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#0B5A3F] via-[#E6B325] to-[#FF3B3B] md:block" />

        <div className="space-y-5 md:pl-14">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <article
                key={milestone.year}
                className={cn(
                  "timeline-moment relative overflow-hidden rounded-md border border-[#102117]/10 bg-white/85 p-5 shadow-[0_22px_60px_rgba(16,33,23,.08)] backdrop-blur-sm md:p-7",
                  index % 2 === 0 ? "md:mr-20" : "md:ml-20",
                )}
              >
                <div className="absolute -left-[3.75rem] top-8 hidden h-8 w-8 rounded-full border border-[#0B5A3F]/35 bg-white shadow-[0_12px_30px_rgba(11,90,63,.16)] md:block" />
                <div className="noise-overlay" />
                <div className="relative z-10 grid gap-6 md:grid-cols-[10rem_minmax(0,1fr)_8rem] md:items-center">
                  <div>
                    <p className="font-score text-6xl leading-none text-[#E6B325]">{milestone.year}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-[#102117]/44">
                      Season marker
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-md border border-[#102117]/10 bg-[#F7F9F2]">
                        <Icon className="h-5 w-5 text-[#0B5A3F]" />
                      </span>
                      <h3 className="font-display text-4xl uppercase text-[#102117]">{milestone.title}</h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-6 text-[#526158] sm:text-base">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="rounded-md border border-[#FF3B3B]/22 bg-[#FF3B3B]/10 p-4 text-left md:text-right">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#102117]/44">
                      Signal
                    </p>
                    <p className="font-score text-3xl text-[#102117]">{milestone.metric}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-[#E6B325]/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-[#FF3B3B]/12 blur-3xl" />
          <div className="absolute right-0 top-0 hidden gap-2 lg:grid lg:grid-cols-6">
            {Array.from({ length: 48 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: index % 3 === 0 ? "#E6B325" : index % 4 === 0 ? "#FF3B3B" : "#5CFF8F",
                  opacity: 0.28 + (index % 5) * 0.08,
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
