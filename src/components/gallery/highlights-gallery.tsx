"use client";

import Image from "next/image";
import { Camera, Film, Play } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { gallery, videoHighlights } from "@/data/cricket";
import { cn } from "@/lib/utils";

export function HighlightsGallery() {
  return (
    <SectionShell
      id="highlights"
      eyebrow="Media Gallery"
      title="Real Clips, Real Match Texture"
      intro="The gallery now uses actual cricket video files and grounded match photography, so this feels like a sports site instead of a generated visual demo."
      className="overflow-hidden bg-[#F7F9F2]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <Reveal>
          <div className="rounded-md border border-[#102117]/10 bg-white p-4 shadow-[0_22px_60px_rgba(16,33,23,.10)] sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B5A3F]">
                <Film className="h-4 w-4" />
                Featured video
              </p>
              <span className="rounded-full bg-[#EDF8EE] px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.12em] text-[#0B5A3F]">
                Wikimedia
              </span>
            </div>
            <div className="overflow-hidden rounded-md bg-[#102117]">
              <video
                className="aspect-video w-full object-cover"
                src={videoHighlights[0].src}
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <div className="mt-4">
              <p className="font-display text-4xl uppercase leading-none text-[#102117]">
                {videoHighlights[0].title}
              </p>
              <p className="mt-2 text-sm text-[#68766e]">{videoHighlights[0].label}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {videoHighlights.slice(1).map((video, index) => (
            <Reveal key={video.title} delay={index * 0.06}>
              <article className="grid gap-4 rounded-md border border-[#102117]/10 bg-white p-4 shadow-[0_18px_50px_rgba(16,33,23,.08)] sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-center">
                <div className="relative overflow-hidden rounded-md bg-[#102117]">
                  <video
                    className="aspect-video w-full object-cover"
                    src={video.src}
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/16 text-white">
                    <Play className="h-8 w-8 fill-current" />
                  </span>
                </div>
                <div>
                  <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-[#0B5A3F]">
                    {video.source}
                  </p>
                  <h3 className="mt-2 font-bold leading-6 text-[#102117]">{video.title}</h3>
                  <p className="mt-1 text-sm text-[#68766e]">{video.label}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 grid auto-rows-[16rem] gap-4 md:grid-cols-4">
        {gallery.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04} className={cn(item.span)}>
            <article className="group relative h-full overflow-hidden rounded-md border border-[#102117]/10 bg-[#102117] shadow-[0_22px_60px_rgba(16,33,23,.12)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={item.span ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover opacity-82 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#0B5A3F]">
                <Camera className="h-3.5 w-3.5" />
                {item.kicker}
              </div>
              <h3 className="absolute bottom-4 left-4 right-4 font-display text-4xl uppercase leading-none text-white">
                {item.title}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
