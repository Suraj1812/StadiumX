"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type ParticleFieldProps = {
  className?: string;
  density?: number;
};

export function ParticleField({ className, density = 64 }: ParticleFieldProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      background: { color: "transparent" },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: { value: density, density: { enable: true, width: 1200, height: 900 } },
        color: { value: ["#5CFF8F", "#E6B325", "#FF3B3B"] },
        shape: { type: "circle" },
        opacity: { value: { min: 0.08, max: 0.42 } },
        size: { value: { min: 0.8, max: 2.8 } },
        move: {
          enable: true,
          speed: { min: 0.25, max: 1.1 },
          direction: "top",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          color: "#5CFF8F",
          opacity: 0.08,
          distance: 130,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 90, duration: 0.5 },
        },
      },
    }),
    [density],
  );

  if (!ready) {
    return null;
  }

  return <Particles className={className} options={options} />;
}
