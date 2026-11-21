import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProduct, products, relatedProducts } from "@/data/products";
import { BuyButton, ProductGrid, ProductImage } from "@/components/ProductCard";
import { Badge, RatingStars, formatPrice } from "@/components/ui";
import { buildAffiliateUrl } from "@/lib/affiliate";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category)!;
  const related = relatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.summary,
    category: category.name,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: site.name },
      reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: 5 },
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      url: buildAffiliateUrl(product),
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ocean-700">Home</Link> /{" "}
        <Link href={`/category/${category.slug}/`} className="hover:text-ocean-700">{category.name}</Link> /{" "}
        <span className="text-ink">{product.brand}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="self-start overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/5 lg:sticky lg:top-32">
          <ProductImage product={product} className="aspect-[4/3] w-full" />
        </div>
        <div>
          {product.badges && (
            <div className="flex flex-wrap gap-2">
              {product.badges.map((b) => <Badge key={b} label={b} />)}
            </div>
          )}
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ocean-600">{product.brand}</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold leading-tight sm:text-5xl">{product.name}</h1>
          <div className="mt-3"><RatingStars rating={product.rating} /></div>
          <p className="mt-4 text-lg text-ink/75">{product.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-3xl bg-sand-100 p-5">
            <div>
              <p className="text-xs text-ink/60">Typical price</p>
              <p className="text-2xl font-extrabold">{formatPrice(product.price)}</p>
            </div>
            <div className="ml-auto"><BuyButton product={product} size="lg" /></div>
          </div>
          <p className="mt-3 text-xs text-ink/50">
            Prices change often. You&apos;ll see the current price at {product.link.retailer}. We may earn a commission if you buy through
            this link, at no extra cost to you. <Link href="/disclosure/" className="underline">Learn more</Link>.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold">Why we picked it</h2>
          <p className="mt-2 text-ink/80">{product.whyWePicked}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-ocean-50 p-5">
              <h3 className="font-bold text-ocean-700">What we love</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {product.pros.map((p) => <li key={p} className="flex gap-2"><span className="text-ocean-600" aria-hidden="true">✓</span>{p}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl bg-coral-400/10 p-5">
              <h3 className="font-bold text-coral-600">Keep in mind</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {product.cons.map((c) => <li key={c} className="flex gap-2"><span className="text-coral-500" aria-hidden="true">–</span>{c}</li>)}
              </ul>
            </div>
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold">Specs at a glance</h2>
          <dl className="mt-3 divide-y divide-ink/5 overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-4 px-5 py-3 text-sm">
                <dt className="font-semibold text-ink/60">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-ink/50">Specs are approximate. Check the retailer listing for exact details.</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-3xl font-extrabold">More {category.name.toLowerCase()} we love</h2>
          <div className="mt-6"><ProductGrid products={related} /></div>
        </section>
      )}
    </div>
  );
}
