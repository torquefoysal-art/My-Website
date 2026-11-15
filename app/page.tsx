import { Catalog } from "@/components/store/Catalog";
import { ShirtGraphic } from "@/components/store/ShirtGraphic";
import { StoreFrame } from "@/components/store/StoreFrame";
import { shirts } from "@/lib/catalog";

export default function HomePage() {
  const hero = shirts[0];

  return (
    <StoreFrame>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="kicker">Shirt studio</p>
          <h1 id="hero-title">
            Shirts, kept
            <em> in order.</em>
          </h1>
          <p className="lede">
            Eight tees on one block. Navy, blue, sky, and white. The cloth moves. The rail does not.
          </p>
          <a className="button" href="#shop">
            Shop the rail
          </a>
        </div>
        <div className="hero-stage">
          <ShirtGraphic body={hero.colors[0].body} collar={hero.colors[0].collar} className="tee-hero" />
        </div>
      </section>
      <Catalog shirts={shirts} />
      <section className="cuts" id="cuts" aria-labelledby="cuts-title">
        <p className="kicker">The cuts</p>
        <h2 id="cuts-title">Three rails, one measurement.</h2>
        <div>
          <article>
            <h3>Essential</h3>
            <p>The daily shirts. Light enough for heat, finished enough to look considered.</p>
          </article>
          <article>
            <h3>Heavyweight</h3>
            <p>Denser cloth, same shoulder. A shirt that keeps a shape when it is on a hanger.</p>
          </article>
          <article>
            <h3>Studio</h3>
            <p>One pocket, one stripe, one dip of sky. Still the same block as the navy tee.</p>
          </article>
        </div>
      </section>
    </StoreFrame>
  );
}
