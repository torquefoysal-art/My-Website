"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const StudioCanvas = dynamic(() => import("@/components/scene/StudioCanvas"), {
  ssr: false,
});

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function motionEnabled() {
  return !window.matchMedia(motionQuery).matches;
}

export function SceneGate() {
  const enabled = useSyncExternalStore(subscribe, motionEnabled, () => false);

  if (!enabled) return null;
  return (
    <div className="scene-layer" aria-hidden="true">
      <StudioCanvas />
    </div>
  );
}
