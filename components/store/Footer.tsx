import Link from "next/link";

export function Footer() {
  return (
    <footer className="shop-footer">
      <p className="brand">Halyard</p>
      <p>F1 jerseys. Eight numbers. Checkout does not charge a card.</p>
      <nav aria-label="Footer">
        <Link href="/#shop">Shop</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </footer>
  );
}
