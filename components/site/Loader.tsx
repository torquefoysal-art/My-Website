"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/site/Mark";

export function Loader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("fi-introduced") === "1";
    const wait = reduce || seen ? 280 : 1700;
    const finish = window.setTimeout(() => setDone(true), wait);
    const remove = window.setTimeout(() => setGone(true), wait + (reduce ? 0 : 900));
    sessionStorage.setItem("fi-introduced", "1");
    return () => {
      window.clearTimeout(finish);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={done ? "loader is-done" : "loader"} role="status" aria-live="polite">
      <div className="loader-inner">
        <Mark className="mark loader-mark" />
        <p>Foysal Islam</p>
        <span>Web developer</span>
      </div>
    </div>
  );
}
