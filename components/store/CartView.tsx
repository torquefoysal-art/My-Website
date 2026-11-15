"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/catalog";
import { useCart } from "./CartProvider";

export function CartView() {
  const { lines, total, setQty, remove } = useCart();

  if (lines.length === 0) {
    return (
      <section className="cart-empty">
        <p className="kicker">Cart</p>
        <h1>The cart is empty.</h1>
        <p>The rail is still in order. Choose a shirt and a size.</p>
        <Link className="button" href="/#shop">
          Back to the shop
        </Link>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <p className="kicker">Cart</p>
        <h1>Ready to fold.</h1>
      </header>
      <ul>
        {lines.map((line) => (
          <li key={`${line.slug}-${line.color}-${line.size}`}>
            <div>
              <h2>{line.name}</h2>
              <p>
                {line.color} · Size {line.size}
              </p>
            </div>
            <label>
              Qty
              <input
                type="number"
                min={1}
                max={8}
                value={line.qty}
                onChange={(event) => setQty(line.slug, line.color, line.size, Number(event.target.value))}
              />
            </label>
            <p className="price">{formatPrice(line.price * line.qty)}</p>
            <button type="button" onClick={() => remove(line.slug, line.color, line.size)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <footer>
        <p>
          Total <strong>{formatPrice(total)}</strong>
        </p>
        <Link className="button" href="/checkout">
          Checkout
        </Link>
      </footer>
    </section>
  );
}
