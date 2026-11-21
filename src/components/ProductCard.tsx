import Link from "next/link";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";
import { buildAffiliateUrl } from "@/lib/affiliate";
import { withBase } from "@/lib/paths";
import CategoryArt from "./CategoryArt";
import { Badge, RatingStars, formatPrice } from "./ui";

export function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  if (product.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={withBase(product.image)} alt={product.name} className={`object-cover ${className}`} />;
  }
  return <CategoryArt slug={product.category} className={className} />;
}

export function BuyButton({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const sizing = size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2 text-sm";
  return (
    <a
      href={buildAffiliateUrl(product)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      data-buy-button
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 font-semibold text-white shadow-sm transition hover:bg-coral-600 ${sizing}`}
    >
      Check price at {product.link.retailer}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.slug}/`} className="relative block">
        <ProductImage product={product} className="aspect-[4/3] w-full" />
        {product.badges && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-ocean-600">
          {product.brand} · {category?.name}
        </p>
        <h3 className="font-display text-lg font-bold leading-snug">
          <Link href={`/product/${product.slug}/`} className="hover:text-ocean-700">
            {product.name}
          </Link>
        </h3>
        <RatingStars rating={product.rating} />
        <p className="text-sm text-ink/70">{product.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="text-lg font-bold">
            <span className="text-xs font-medium text-ink/50">from </span>
            {formatPrice(product.price)}
          </span>
          <BuyButton product={product} />
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
