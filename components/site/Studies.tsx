"use client";

import { useState } from "react";
import { studies, type SceneMood } from "@/lib/content";
import { setSceneMood } from "@/lib/scene-mood";

export function Studies() {
  const [open, setOpen] = useState<string | null>(studies[0].id);

  const select = (id: string, mood: SceneMood) => {
    setSceneMood(mood);
    setOpen((current) => (current === id ? null : id));
  };

  return (
    <section className="section studies" id="studies" aria-labelledby="studies-title">
      <div className="section-head">
        <p>01 — Studies</p>
        <h2 id="studies-title">Selected directions.</h2>
      </div>
      <p className="section-lead">
        Three original studies. They are not client claims. They show the kind of interface I like to make: quiet, exact, and built to last a reading.
      </p>
      <div className="study-list">
        {studies.map((study) => {
          const expanded = open === study.id;
          return (
            <article key={study.id} className={expanded ? "study is-open" : "study"}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`${study.id}-panel`}
                onClick={() => select(study.id, study.mood)}
                onMouseEnter={() => setSceneMood(study.mood)}
                onFocus={() => setSceneMood(study.mood)}
                onMouseLeave={() => setSceneMood("gold")}
                onBlur={() => setSceneMood("gold")}
              >
                <span className="study-index">{study.index}</span>
                <span>
                  <strong>{study.title}</strong>
                  <em>{study.summary}</em>
                </span>
                <span className="study-action">{expanded ? "Close" : "Open"}</span>
              </button>
              <div id={`${study.id}-panel`} className="study-panel" hidden={!expanded}>
                <p>{study.detail}</p>
                <ul>
                  {study.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
