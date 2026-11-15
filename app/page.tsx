import { Catalog } from "@/components/store/Catalog";
import { FlyIn } from "@/components/store/FlyIn";
import { ShirtGraphic } from "@/components/store/ShirtGraphic";
import { StoreFrame } from "@/components/store/StoreFrame";
import { shirts } from "@/lib/catalog";

export default function HomePage() {
  const hero = shirts[0];

  return (
    <StoreFrame>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="kicker">Race jerseys</p>
          <h1 id="hero-title">
            Out of the
            <em> corner.</em>
          </h1>
          <p className="lede">
            Eight F1 jerseys. Each one leaves a corner of the screen and lands on the grid, one after the next.
          </p>
          <a className="button" href="#shop">
            Enter the grid
          </a>
        </div>
        <div className="hero-stage">
          <FlyIn from="br">
            <ShirtGraphic
              body={hero.colors[0].body}
              accent={hero.colors[0].collar}
              number={hero.number}
              className="tee-hero"
            />
          </FlyIn>
        </div>
      </section>
      <Catalog shirts={shirts} />
      <section className="cuts" id="cuts" aria-labelledby="cuts-title">
        <p className="kicker">The garage</p>
        <h2 id="cuts-title">Three lines. Same race cut.</h2>
        <div>
          <article>
            <h3>Grid</h3>
            <p>The starting jerseys. Carbon, red, and white, numbered so they read at a distance.</p>
          </article>
          <article>
            <h3>Aero</h3>
            <p>Tighter cloth, same sleeve, a yoke that carries the accent out to the cuff.</p>
          </article>
          <article>
            <h3>Pit</h3>
            <p>Yellow, green, and silver. The shirts the lane already knows how to see.</p>
          </article>
        </div>
      </section>
    </StoreFrame>
  );
}
