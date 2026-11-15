"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { formatPrice } from "@/lib/catalog";
import { useCart } from "./CartProvider";

export function CheckoutForm() {
  const { lines, total, clear } = useCart();
  const [order, setOrder] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const number = `HY-${Date.now().toString().slice(-6)}`;
    setOrder(number);
    clear();
  };

  if (lines.length === 0 && !order) {
    return (
      <section className="cart-empty">
        <p className="kicker">Checkout</p>
        <h1>Nothing to ship yet.</h1>
        <Link className="button" href="/#shop">
          Choose a shirt
        </Link>
      </section>
    );
  }

  if (order) {
    return (
      <section className="cart-empty">
        <p className="kicker">Order {order}</p>
        <h1>The shirts are noted.</h1>
        <p>This desk records the order in the browser. No card is charged on this page.</p>
        <Link className="button" href="/#shop">
          Continue looking
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout">
      <div>
        <p className="kicker">Checkout</p>
        <h1>Where should they go?</h1>
        <form onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Address
            <textarea name="address" required rows={3} autoComplete="street-address" />
          </label>
          <button className="button" type="submit">
            Place order · {formatPrice(total)}
          </button>
        </form>
      </div>
      <aside>
        <h2>In this parcel</h2>
        <ul>
          {lines.map((line) => (
            <li key={`${line.slug}-${line.color}-${line.size}`}>
              <span>
                {line.name} · {line.color} · {line.size} × {line.qty}
              </span>
              <span>{formatPrice(line.price * line.qty)}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
