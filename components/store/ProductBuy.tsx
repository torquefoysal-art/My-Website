"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice, sizes, type Shirt } from "@/lib/catalog";
import { FlyIn } from "./FlyIn";
import { ShirtGraphic } from "./ShirtGraphic";
import { useCart } from "./CartProvider";

export function ProductBuy({ shirt }: { shirt: Shirt }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [size, setSize] = useState<string>("M");
  const [notice, setNotice] = useState("");
  const { add } = useCart();
  const router = useRouter();
  const color = shirt.colors[colorIndex];

  const addShirt = (goToCart: boolean) => {
    if (!size) {
      setNotice("Choose a size.");
      return;
    }
    add({
      slug: shirt.slug,
      name: shirt.name,
      price: shirt.price,
      color: color.name,
      size,
    });
    setNotice(`${shirt.name} in ${color.name}, size ${size}, is in the cart.`);
    if (goToCart) router.push("/cart");
  };

  return (
    <div className="product">
      <div className="product-stage">
        <FlyIn from="tr">
          <ShirtGraphic body={color.body} accent={color.collar} number={shirt.number} className="tee-hero" />
        </FlyIn>
      </div>
      <div className="product-copy">
        <p className="kicker">{shirt.category}</p>
        <h1>{shirt.name}</h1>
        <p className="price product-price">{formatPrice(shirt.price)}</p>
        <p className="summary">{shirt.summary}</p>
        <fieldset>
          <legend>Color</legend>
          <div className="swatches">
            {shirt.colors.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={index === colorIndex}
                onClick={() => setColorIndex(index)}
              >
                <span style={{ background: item.body }} />
                {item.name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Size</legend>
          <div className="sizes">
            {sizes.map((item) => (
              <button key={item} type="button" aria-pressed={size === item} onClick={() => setSize(item)}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="buy-row">
          <button type="button" className="button" onClick={() => addShirt(false)}>
            Add to cart
          </button>
          <button type="button" className="button ghost" onClick={() => addShirt(true)}>
            Buy now
          </button>
        </div>
        {notice ? <p className="notice">{notice}</p> : null}
        <dl className="facts">
          <div>
            <dt>Fabric</dt>
            <dd>{shirt.fabric}</dd>
          </div>
          <div>
            <dt>Fit</dt>
            <dd>{shirt.fit}</dd>
          </div>
        </dl>
        <ul className="details">
          {shirt.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
