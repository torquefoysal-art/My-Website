import type { Metadata } from "next";
import { CheckoutForm } from "@/components/store/CheckoutForm";
import { StoreFrame } from "@/components/store/StoreFrame";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Send a Halyard order.",
};

export default function CheckoutPage() {
  return (
    <StoreFrame>
      <CheckoutForm />
    </StoreFrame>
  );
}
