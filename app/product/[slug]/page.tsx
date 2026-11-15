import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductBuy } from "@/components/store/ProductBuy";
import { StoreFrame } from "@/components/store/StoreFrame";
import { getShirt, shirts } from "@/lib/catalog";

type ProductParams = { slug: string };

export function generateStaticParams(): ProductParams[] {
  return shirts.map((shirt) => ({ slug: shirt.slug }));
}

export async function generateMetadata({ params }: { params: Promise<ProductParams> }): Promise<Metadata> {
  const { slug } = await params;
  const shirt = getShirt(slug);
  if (!shirt) return { title: "Shirt" };
  return {
    title: shirt.name,
    description: shirt.summary,
  };
}

export default function ProductPage({ params }: { params: Promise<ProductParams> }) {
  return (
    <StoreFrame>
      <Suspense fallback={<p className="waiting">Unfolding the shirt…</p>}>
        <ProductBody params={params} />
      </Suspense>
    </StoreFrame>
  );
}

async function ProductBody({ params }: { params: Promise<ProductParams> }) {
  const { slug } = await params;
  const shirt = getShirt(slug);
  if (!shirt) notFound();
  return <ProductBuy shirt={shirt} />;
}
