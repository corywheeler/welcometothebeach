"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { allBadges, categories, products, type Badge, type CategorySlug } from "@/data/products";
import { ProductGrid } from "./ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

const priceRanges = [
  { id: "all", label: "Any price", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to150", label: "$50 – $150", min: 50, max: 150 },
  { id: "150to300", label: "$150 – $300", min: 150, max: 300 },
  { id: "over300", label: "$300+", min: 300, max: Infinity },
];

export function ShopBrowser({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [cats, setCats] = useState<CategorySlug[]>([]);
  const [badge, setBadge] = useState<Badge | "">("");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const range = priceRanges.find((r) => r.id === price)!;
    const list = products.filter((p) => {
      if (cats.length && !cats.includes(p.category)) return false;
      if (badge && !p.badges?.includes(badge)) return false;
      if (p.price < range.min || p.price >= range.max) return false;
      if (q) {
        const hay = `${p.name} ${p.brand} ${p.summary} ${categories.find((c) => c.slug === p.category)?.name}`.toLowerCase();
        if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    });
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sort === "featured") sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return sorted;
  }, [query, cats, badge, price, sort]);

  const toggleCat = (slug: CategorySlug) =>
    setCats((c) => (c.includes(slug) ? c.filter((s) => s !== slug) : [...c, slug]));

  const clear = () => {
    setQuery("");
    setCats([]);
    setBadge("");
    setPrice("all");
  };

  const chip = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition ${
      active ? "bg-ocean-600 text-white ring-ocean-600" : "bg-white text-ink/80 ring-ink/10 hover:ring-ocean-500"
    }`;

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start" aria-label="Filters">
        <div>
          <label htmlFor="shop-q" className="text-xs font-bold uppercase tracking-wider text-ink/50">Search</label>
          <input
            id="shop-q"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. wagon, YETI, umbrella"
            className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
          />
        </div>
        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-wider text-ink/50">Category</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c.slug} type="button" aria-pressed={cats.includes(c.slug)} onClick={() => toggleCat(c.slug)} className={chip(cats.includes(c.slug))}>
                {c.name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-wider text-ink/50">Price</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {priceRanges.map((r) => (
              <button key={r.id} type="button" aria-pressed={price === r.id} onClick={() => setPrice(r.id)} className={chip(price === r.id)}>
                {r.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-wider text-ink/50">Collections</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {allBadges.map((b) => (
              <button key={b} type="button" aria-pressed={badge === b} onClick={() => setBadge(badge === b ? "" : b)} className={chip(badge === b)}>
                {b}
              </button>
            ))}
          </div>
        </fieldset>
        <button type="button" onClick={clear} className="text-sm font-semibold text-coral-600 hover:underline">
          Clear all filters
        </button>
      </aside>

      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink/70" aria-live="polite" data-result-count={results.length}>
            Showing <strong>{results.length}</strong> of {products.length} products
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-ink/60">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full border border-ink/10 bg-white px-3 py-1.5 outline-none focus:border-ocean-500"
            >
              <option value="featured">Featured</option>
              <option value="rating">Top rated</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </label>
        </div>
        {results.length ? (
          <ProductGrid products={results} />
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-ink/5">
            <p className="font-display text-xl font-bold">No gear matches those filters</p>
            <p className="mt-1 text-sm text-ink/60">Try a different search or clear your filters.</p>
            <button type="button" onClick={clear} className="mt-4 rounded-full bg-ocean-600 px-5 py-2 text-sm font-semibold text-white">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Reads ?q= from the address bar (used by the header search box). */
export function ShopWithSearchParams() {
  const q = useSearchParams().get("q") ?? "";
  return <ShopBrowser key={q} initialQuery={q} />;
}
