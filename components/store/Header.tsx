"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

const links = [
  { href: "/#shop", label: "Shop" },
  { href: "/#cuts", label: "Cuts" },
  { href: "/cart", label: "Cart" },
];

export function Header() {
  const { count } = useCart();

  return (
    <header className="shop-nav">
      <a className="skip" href="#content">
        Skip to the shirts
      </a>
      <Link href="/" className="brand">
        Halyard
      </Link>
      <nav aria-label="Shop">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
            {link.href === "/cart" && count > 0 ? <span className="count">{count}</span> : null}
          </Link>
        ))}
      </nav>
    </header>
  );
}
