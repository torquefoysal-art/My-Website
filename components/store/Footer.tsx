import Link from "next/link";

export function Footer() {
  return (
    <footer className="shop-footer">
      <p className="brand">Halyard</p>
      <p>Shirts cut on one block. Navy, blue, sky, and white.</p>
      <nav aria-label="Footer">
        <Link href="/#shop">Shop</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </footer>
  );
}
