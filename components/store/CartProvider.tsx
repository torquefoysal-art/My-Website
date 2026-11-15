"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  color: string;
  size: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (slug: string, color: string, size: string, qty: number) => void;
  remove: (slug: string, color: string, size: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "halyard-cart";

function sameLine(line: CartLine, slug: string, color: string, size: string) {
  return line.slug === slug && line.color === color && line.size === size;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) setLines(JSON.parse(stored) as CartLine[]);
    } catch {
      setLines([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(storageKey, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
    return {
      lines,
      count,
      total,
      add: (line, qty = 1) => {
        setLines((current) => {
          const index = current.findIndex((item) => sameLine(item, line.slug, line.color, line.size));
          if (index === -1) return [...current, { ...line, qty }];
          return current.map((item, itemIndex) =>
            itemIndex === index ? { ...item, qty: item.qty + qty } : item,
          );
        });
      },
      setQty: (slug, color, size, qty) => {
        setLines((current) =>
          current
            .map((item) => (sameLine(item, slug, color, size) ? { ...item, qty } : item))
            .filter((item) => item.qty > 0),
        );
      },
      remove: (slug, color, size) => {
        setLines((current) => current.filter((item) => !sameLine(item, slug, color, size)));
      },
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
