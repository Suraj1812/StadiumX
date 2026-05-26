"use client";

import { motion } from "framer-motion";
import { Play, ScanLine } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { gallery } from "@/data/cricket";
import { cn } from "@/lib/utils";

export function HighlightsGallery() {
  return (
    <SectionShell
      id="highlights"
      eyebrow="Gallery / Highlights"
      title="Cameras In The Fire"
      intro="A masonry wall of cinematic match fragments, designed like a premium streaming highlight rail with zoom, scanlines, and live-shot pressure."
      className="overflow-hidden bg-[linear-gradient(180deg,#F7F9F2,#EEF4EC_45%,#F7F9F2)]"
    >
      <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-4">
        {gallery.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className={cn(item.span)}>
            <motion.article
              whileHover={{ scale: 0.985 }}
              className="group relative h-full overflow-hidden rounded-md border border-[#102117]/10 bg-[#102117] shadow-[0_22px_60px_rgba(16,33,23,.12)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={item.span ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover opacity-72 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent" />
              <div className="noise-overlay" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                <ScanLine className="h-3.5 w-3.5 text-[#7FE6A0]" />
                {item.kicker}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <h3 className="font-display text-4xl uppercase leading-none text-white">{item.title}</h3>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#7FE6A0]/50 bg-[#7FE6A0]/15 text-[#7FE6A0] transition group-hover:bg-[#7FE6A0] group-hover:text-[#04130d]">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
