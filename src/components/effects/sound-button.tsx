"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Howl } from "howler";
import { createCrowdHowl } from "@/lib/audio";
import { MagneticButton } from "./magnetic-button";

export function SoundButton() {
  const sound = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      sound.current?.stop();
      sound.current?.unload();
    };
  }, []);

  const toggle = () => {
    if (!sound.current) {
      sound.current = createCrowdHowl();
    }

    if (playing) {
      sound.current.fade(0.26, 0, 260);
      window.setTimeout(() => sound.current?.pause(), 280);
      setPlaying(false);
      return;
    }

    sound.current.volume(0.26);
    sound.current.play();
    setPlaying(true);
  };

  return (
    <MagneticButton type="button" onClick={toggle} variant={playing ? "danger" : "primary"}>
      {playing ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      {playing ? "Mute crowd" : "Raise the chant"}
    </MagneticButton>
  );
}
