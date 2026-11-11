"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !ring.current) return;

    document.body.classList.add("has-cursor");
    const node = ring.current;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...position };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      position.x = event.clientX;
      position.y = event.clientY;
      const target = event.target;
      const active = target instanceof Element && Boolean(target.closest("a, button, input, textarea"));
      node.classList.toggle("is-active", active);
    };

    const tick = () => {
      current.x += (position.x - current.x) * 0.18;
      current.y += (position.y - current.y) * 0.18;
      node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ring} className="cursor" aria-hidden="true" />;
}
