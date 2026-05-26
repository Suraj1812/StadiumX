"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import type { Player } from "@/data/cricket";
import { useCountUp } from "@/hooks/use-count-up";

function PlayerStat({ label, value, suffix = "" }: Player["stats"][number]) {
  const animated = useCountUp(value, 1000, value * 0.4);

  return (
    <div className="border-l border-white/12 pl-3">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/44">{label}</p>
      <p className="font-score text-4xl text-white">
        {value % 1 === 0 ? Math.round(animated) : animated.toFixed(1)}
        {suffix}
      </p>
    </div>
  );
}

export function PlayerCard({ player, index }: { player: Player; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay: index * 0.08 }}
      className="group relative min-h-[36rem] overflow-hidden rounded-md border border-white/10 bg-[#07110e]"
    >
      <motion.img
        src={player.image}
        alt={`${player.name} spotlight`}
        style={{ y: imageY }}
        className="absolute inset-0 h-[112%] w-full object-cover opacity-58 grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:opacity-74"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, #050505 82%), radial-gradient(circle at 25% 24%, ${player.accent}55, transparent 30%)`,
        }}
      />
      <div className="noise-overlay" />
      <div className="relative z-10 flex h-full min-h-[36rem] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <Badge className="border-white/15 bg-black/50 text-white/78">
            <Star className="mr-2 h-3.5 w-3.5 text-[#E6B325]" />
            {player.badge}
          </Badge>
          <span
            className="h-12 w-12 rounded-full blur-2xl"
            style={{ backgroundColor: player.accent }}
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#5CFF8F]">
            {player.role} / {player.team}
          </p>
          <h3 className="mt-2 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
            {player.name}
          </h3>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {player.stats.map((stat) => (
              <PlayerStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
