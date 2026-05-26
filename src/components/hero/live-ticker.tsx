"use client";

import { heroTicker } from "@/data/cricket";

export function LiveTicker() {
  const items = [...heroTicker, ...heroTicker];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/60 py-3 backdrop-blur-sm">
      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-score text-xl uppercase text-white/84 sm:text-2xl"
          >
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#FF3B3B] shadow-led-red" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
