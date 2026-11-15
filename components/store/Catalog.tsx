"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, formatPrice, type Shirt } from "@/lib/catalog";
import { ShirtGraphic } from "./ShirtGraphic";

export function Catalog({ shirts }: { shirts: Shirt[] }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? shirts : shirts.filter((shirt) => shirt.category === filter)),
    [filter, shirts],
  );

  return (
    <section className="shop" id="shop" aria-labelledby="shop-title">
      <div className="shop-head">
        <div>
          <p className="kicker">The rail</p>
          <h2 id="shop-title">Eight shirts. One block.</h2>
        </div>
        <div className="filters" role="group" aria-label="Filter by cut">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid">
        {visible.map((shirt, index) => {
          const color = shirt.colors[0];
          return (
            <article key={shirt.slug} className="card">
              <Link href={`/product/${shirt.slug}`} className="card-link">
                <div className="card-stage">
                  <ShirtGraphic
                    body={color.body}
                    collar={color.collar}
                    pocket={shirt.slug === "cloud-pocket"}
                    stripe={shirt.slug === "ink-stripe"}
                    delay={`${index * 0.18}s`}
                  />
                </div>
                <div className="card-meta">
                  <p className="kicker">{shirt.category}</p>
                  <h3>{shirt.name}</h3>
                  <p className="price">{formatPrice(shirt.price)}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
