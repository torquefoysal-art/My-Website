import type { Metadata } from "next";
import { CartView } from "@/components/store/CartView";
import { StoreFrame } from "@/components/store/StoreFrame";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review the shirts in your Halyard cart.",
};

export default function CartPage() {
  return (
    <StoreFrame>
      <CartView />
    </StoreFrame>
  );
}
