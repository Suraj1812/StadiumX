"use client";

import { heroTicker } from "@/data/cricket";

export function LiveTicker() {
  const items = [...heroTicker, ...heroTicker];

  return (
    <div className="relative overflow-hidden border-y border-[#102117]/10 bg-white/80 py-3 shadow-[0_10px_30px_rgba(16,33,23,.06)] backdrop-blur-sm">
      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap pl-8">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-score text-xl uppercase text-[#102117]/84 sm:text-2xl"
          >
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#FF3B3B] shadow-led-red" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
