import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function StoreFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
