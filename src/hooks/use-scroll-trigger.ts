"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollTrigger(
  callback: () => void,
  scope: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!scope.current) {
      return;
    }

    const context = gsap.context(callback, scope);
    return () => context.revert();
  }, [callback, scope]);
}
