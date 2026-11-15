"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const corners = ["tl", "tr", "bl", "br"] as const;

export type Corner = (typeof corners)[number];

let chain: Promise<void> = Promise.resolve();

export function FlyIn({ from, children }: { from: Corner; children: ReactNode }) {
  const slot = useRef<HTMLDivElement>(null);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    const node = slot.current;
    if (!node) return;
    let alive = true;
    let queued = false;

    const launch = () => {
      if (queued) return;
      queued = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (alive) setArrived(true);
        return;
      }
      chain = chain.then(
        () =>
          new Promise((resolve) => {
            if (alive) setArrived(true);
            window.setTimeout(resolve, 520);
          }),
      );
    };

    const visible = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 72 && rect.height > 0;
    };

    const onScroll = () => {
      if (visible()) launch();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      alive = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={slot} className="fly-slot">
      <div className={`fly fly-${from}${arrived ? " is-in" : ""}`}>{children}</div>
    </div>
  );
}

export function cornerFor(index: number): Corner {
  return corners[index % corners.length];
}
