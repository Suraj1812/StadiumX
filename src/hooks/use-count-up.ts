"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 1200, start = 0) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let frame = 0;
    let raf = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (target - start) * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, start, target]);

  return value;
}
