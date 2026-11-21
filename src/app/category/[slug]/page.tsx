import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, productsInCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductCard";
import CategoryArt from "@/components/CategoryArt";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `Best ${category.name}`,
    description: `Our top-rated ${category.name.toLowerCase()} for the beach. ${category.short}`,
  };
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = [...productsInCategory(slug)].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.rating - a.rating);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ocean-700">Home</Link> / <Link href="/shop/" className="hover:text-ocean-700">Shop</Link> /{" "}
        <span className="text-ink">{category.name}</span>
      </nav>
      <div className="mt-6 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/5 md:grid-cols-2">
        <div className="p-8 sm:p-10">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Best {category.name}</h1>
          <p className="mt-3 text-lg text-ink/70">{category.short}</p>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-wider text-ocean-700">Quick buying guide</h2>
          <ul className="mt-3 space-y-2">
            {category.guide.map((g) => (
              <li key={g} className="flex gap-2 text-sm text-ink/80">
                <span className="mt-0.5 text-ocean-500" aria-hidden="true">●</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <CategoryArt slug={category.slug} className="h-full min-h-56 w-full" />
      </div>
      <div className="mt-10">
        <ProductGrid products={items} />
      </div>
    </div>
  );
}
