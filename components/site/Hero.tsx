import { disciplines } from "@/lib/content";
import { Mark } from "@/components/site/Mark";

const loop = [...disciplines, ...disciplines];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="intro-title">
      <p className="eyebrow">
        <span className="pulse" aria-hidden="true" />
        Web developer
      </p>
      <h1 id="intro-title">
        Foysal
        <em> Islam</em>
      </h1>
      <p className="deck">
        I design and build websites with a steady hand. Structure, type, and motion, finished as one piece of work.
      </p>
      <div className="hero-actions">
        <a className="button" href="#studies">
          View the studies
        </a>
        <a className="button ghost" href="#contact">
          Start a conversation
        </a>
      </div>
      <div className="hero-meta">
        <span>Portfolio / 2026</span>
        <span>Open to thoughtful work</span>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="fallback-star">
        <Mark />
      </div>
    </section>
  );
}
